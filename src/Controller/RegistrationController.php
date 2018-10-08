<?php
// src/Controller/RegistrationController.php
namespace App\Controller;

use App\Form\UserType;
use App\Entity\User;
use App\Events;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

class RegistrationController extends Controller
{
    /**
     * @Route("/register", name="user_registration")
     */
    public function registerAction(
        Request                      $request,
        UserPasswordEncoderInterface $passwordEncoder,
        EventDispatcherInterface     $eventDispatcher
    ) {
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

            return $this->redirectToRoute('');
        }

        return $this->render(
            'register.html.twig',
            array('form' => $form->createView())
        );
    }
}