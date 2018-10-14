<?php

declare(strict_types = 1);

namespace App\Controller;

use App\Entity\User;
use App\Repository\QuestionRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use App\Entity\Quiz;
use App\Entity\Question;
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
     * @param Quiz $quiz
     *
     * @return Response
     */
    public function show(string $id, Quiz $quiz): Response
    {
        if ($quiz) {
           return $this->render("Quiz/quiz.html.twig", [
               "quiz" => $quiz
           ]);
        }

        return $this->redirectToRoute("quiz_index");
    }

    /**
     * @Route("/quiz/play/quiz/{id}/{orderQuestion}", name="quiz_play", requirements={"id"="\d+", "question"="\d+"})
     *
     * @param int $orderQuestion
     * @param Quiz $quiz
     * @param User $user
     *
     * @return Response
     */
    public function play(
        int $orderQuestion,
        Quiz $quiz,
        User $user
    ): Response
    {
        $rating[] = $user->getRating();
        $quizName = $quiz->getName();
        $rate = "";

        if (!array_key_exists($quizName, $rating)) {
            $rating[] = [$quizName => [
                new \DateTime(),
                0,
                0,
                0
            ]];
            $user->setRating($rating);
        } else {
            $rate = $rating[$quizName][2];
        }

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        $question = $quiz->getQuestions();

        return $this->render("Quiz/play.html.twig", [
            "rate" => $rate,
            "quiz" => $quiz,
            "count" => count($question),
            "question" => $question[$orderQuestion],
            "orderQuestion" => $orderQuestion
        ]);
    }

    /**
     * @Route("/check/{id}/{answer}", name="answer_check", requirements={"id"="\d+", "answer"="\d+"})
     *
     * @param string $answer
     * @param QuestionRepository $questionRepository
     * @param string $id
     * @param User $user
     * @param Quiz $quiz
     *
     * @return Response
     */
    public function check(
        string $id,
        string $answer,
        QuestionRepository $questionRepository,
        User $user,
        Quiz $quiz
    ): Response
    {
        $question = $questionRepository->find($id);

        $rating[] = $user->getRating();
        $quizName = $quiz->getName();

        if ($question->getAnswers()[$answer]) {
            var_dump($rating[$quizName][3]++);
            $user->setRating($rating);

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();
            return new Response();
        } else {
            return new Response("", 303);
        }
    }

    /**
     * @Route("/finish/quiz/{id}", name="quiz_finish", requirements={"id"="\d+"})
     *
     * @param string $id
     * @param Quiz $quiz
     * @param User $user
     *
     * @return Response
     */
    public function finish(User $user, string $id, Quiz $quiz): Response
    {
        $startTime = $user->getRating()[$quiz->getName()][0];
        $endTime = new \DateTime();
        $time = $endTime - $startTime;
        $point = $user->getRating()[$quiz->getName()][3];

        $rating[] = [
            $quiz->getName() => [
                $startTime,
                $endTime,
                $time,
                $point
            ]
        ];

        $user->setRating($rating);

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return $this->redirectToRoute("quiz_show", [
            "id" => $quiz->getId()
        ]);
    }
}