<?php

declare(strict_types=1);

namespace App\Controller;

use App\Form\EmailResetType;
use App\Form\PasswordResetType;
use App\Form\UserType;
use App\Entity\User;
use App\Events;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="security_login")
     */
    public function login(AuthenticationUtils $helper): Response
    {
        return $this->render('Security/login.html.twig', [
            'last_username' => $helper->getLastUsername(),
            'error' => $helper->getLastAuthenticationError(),
        ]);
    }

    /**
     * @Route("/register", name="user_registration")
     */
    public function registerAction(
        Request                      $request,
        UserPasswordEncoderInterface $passwordEncoder,
        EventDispatcherInterface     $eventDispatcher
    ): Response
    {
        $user = new User();

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $password = $passwordEncoder->encodePassword($user, $user->getPassword());
            $user->setPassword($password);
            $user->setRoles(['ROLE_USER']);

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            $event = new GenericEvent($user);
            $eventDispatcher->dispatch(Events::USER_REGISTERED, $event);

            return $this->redirectToRoute('security_login');
        }

        return $this->render('Security/register.html.twig', [
                'form' => $form->createView()
            ]);
    }

    /**
     * @Route("/logout", name="security_logout")
     */
    public function logout(): void
    {
        throw new \Exception('This should never be reached!');
    }

    /**
     * @Route("/resetPassword", name="resetPassword")
     *
     * @param Request $request
     * @param \Swift_Mailer $mailer
     * @return Response
     */
    public function resetPassword(
        Request $request,
        \Swift_Mailer $mailer
    ): Response
    {
        $error = "";
        $entityManager = $this->getDoctrine()->getManager();
        $form = $this->createForm(EmailResetType::class);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $user = $entityManager
                ->getRepository(User::class)
                ->findOneBy(['email' => $form->getData()['email']]);
            if ($user !== null) {
                $token = uniqid();
                $user->setResetPassword($token);
                $entityManager->persist($user);
                $entityManager->flush();

                $message = (new \Swift_Message('Restoring password'))
                    ->setFrom('traheia23@gmail.com')
                    ->setTo($user->getEmail())
                    ->setBody(
                        $this->renderView(
                            'Emails/recovery_password.html.twig', [
                            'token' => $token,
                        ]),
                        'text/html'
                    );

                $mailer->send($message);

                return $this->render('Security/Reset/reset-password-confirmation.html.twig');
            } else {
                $error = "Not valid email";
            }
        }

        return $this->render('Security/Reset/reset-password.html.twig', [
            'form' => $form->createView(),
            'error' => $error
        ]);
    }

    /**
     * @Route("/resetPassword/{token}", name="restore")
     *
     * @param Request $request
     * @param string $token
     * @return Response
     */
    public function restore(
        Request $request,
        string $token,
        UserPasswordEncoderInterface $encoder,
        AuthenticationUtils $helper
    ): Response
    {
        if ($token !== null) {
            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager
                ->getRepository(User::class)
                ->findOneBy(['resetPassword' => $token]);

            if ($user !== null) {
                $form = $this->createForm(PasswordResetType::class, $user);

                $form->handleRequest($request);
                if ($form->isSubmitted() && $form->isValid()) {
                    $password = $encoder->encodePassword($user, $user->getPlainPassword());
                    $user->setPassword($password);
                    $user->setResetPassword("");
                    $entityManager->persist($user);
                    $entityManager->flush();

                    return $this->redirectToRoute('security_login');
                }

                return $this->render('Security/Reset/reset-password-token.html.twig', [
                    'form' => $form->createView(),
                    'error' => $helper->getLastAuthenticationError()
                ]);
            }
        }

        throw new \Exception("Something get wrong, try again later");
    }
}
