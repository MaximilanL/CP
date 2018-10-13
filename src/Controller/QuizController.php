<?php

declare(strict_types = 1);

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use App\Entity\Quiz;
use App\Repository\QuizRepository;

class QuizController extends Controller
{
    /**
     * @Route("/quiz", name="quiz_index")
     *
     * @param Request $request
     * @param QuizRepository $quizRepository
     *
     * @return Response
     */
    public function index(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $quizzesRepository = $entityManager->getRepository(Quiz::class);

        $allQuizzesQuery = $quizzesRepository->findAll();

        $paginator = $this->get('knp_paginator');
        $quizzes = $paginator->paginate(
            $allQuizzesQuery,
            $request->query->getInt('page', 1),
            6
        );

        return $this->render('Quiz/main.html.twig', [
            'quizzes' => $quizzes
        ]);
    }
}