<?php

declare(strict_types = 1);

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends Controller
{

    /**
     * @Route("/user", name="userList")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $usersRepository = $entityManager->getRepository(User::class);

        $allUsersQuery = $usersRepository->findAll();

        $paginator  = $this->get('knp_paginator');

        $users = $paginator->paginate(
            $allUsersQuery,
            $request->query->getInt('page', 1),
            5
        );

        return $this->render('Users/users.html.twig', [
            'users' => $users
        ]);
    }


    /**
     * @Route("/user/{id}", name="deleting_user", requirements={"id"="\d+"})
     *
     * @Method({"DELETE"})
     *
     * @param Request $request
     * @param string $id
     *
     * @return void
     */
    public function delete(Request $request, string $id): void
    {
        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->find($id);

        if ($user) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();

            $response = new Response();
            $response->send();
        }

        return;
    }
}
