<?php

declare(strict_types = 1);

namespace App\Controller;

use Symfony\Component\HttpKernel\HttpCache\ResponseCacheStrategy;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Routing\AnnotatedRouteControllerLoader;
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

    /**
     * @Route("/quiz/{id}/{active}", name="deleting_quiz", requirements={"id"="\d+"})
     *
     * @param Request $request
     * @param string $id
     * @param string $active
     * @param QuizRepository $repository
     *
     * @return Response
     */
    public function delete(
        Request $request,
        string $active,
        string $id,
        QuizRepository $repository
    ): Response
    {
        $quiz = $repository->find($id);
        $em = $this->getDoctrine()->getManager();

        if ($quiz) {
            if ($active === "delete") {
                $em->remove($quiz);
                $em->flush();
            }

            if ($active === "reactive") {
                $quiz->setIsActive($quiz->getIsActive() === false ? true : false);
                $em->persist($quiz);
                $em->flush();
            }
        }

        return new Response();
    }

    /**
     * @Route("/quiz/show/{id}", name="quiz_show", requirements={"id"="\d+"})
     *
     * @param string $id
     * @param QuizRepository $quizRepository
     *
     * @return Response
     */
    public function show(string $id, QuizRepository $quizRepository): Response
    {
        $quiz = $quizRepository->find($id);


        if ($quiz) {
           return $this->render("Quiz/quiz.html.twig", [
               "quiz" => $quiz
           ]);
        }

        return $this->redirectToRoute("quiz_index");
    }
}