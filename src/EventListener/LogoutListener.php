<?php

declare(strict_types = 1);

namespace App\EventListener;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Http\Logout\LogoutHandlerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\User;

class LogoutListener implements LogoutHandlerInterface
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @param Request $request
     * @param Response $response
     * @param TokenInterface $token
     *
     * @return void
     */
    public function logout(Request $request, Response $response, TokenInterface $token): void
    {
        $user = $token->getUser();

        $user->setActivity(false);
        $this->em->flush();

        return;
    }
}