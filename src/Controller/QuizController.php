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
     * @Route("/quiz/delete/{id}", name="deleting_quiz", requirements={"id"="\d+"})
     *
     * @param string $id
     * @param QuizRepository $repository
     *
     * @return Response
     */
    public function deleting(
        string $id,
        QuizRepository $repository
        ): Response
    {
        $quiz = $repository->find($id);
        $em = $this->getDoctrine()->getManager();

        if ($quiz) {
            $em->remove($quiz);
            $em->flush();
        }

        return new Response();
    }

    /**
     * @Route("/quizreactive/{id}", name="reactiving_quiz", requirements={"id"="\d+"})
     *
     * @param string $id
     * @param QuizRepository $repository
     *
     * @return Response
     */
    public function reactiving(
        string $id,
        QuizRepository $repository
    ): Response
    {
        $quiz = $repository->find($id);
        $em = $this->getDoctrine()->getManager();

        if ($quiz) {
            $quiz->setIsActive($quiz->getIsActive() === false ? true : false);
            $em->persist($quiz);
            $em->flush();
        }

        return $this->redirectToRoute('quiz_index');
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
        $user = $this->getUser();
        $question = $quiz->getQuestions();

        $stopQuestion = count($question);

        $rating = $user->getRating();
        $quizName = $quiz->getName();
        $rate = 0;
        $time = null;

        if (!array_key_exists($quizName, $rating)) {
            $rating[$quizName] = [
                new \DateTime(),
                "",
                "",
                0,
                0
            ];
            $user->setRating($rating);
        } else {

            $rate = $rating[$quizName][3];
            $stop = $rating[$quizName][4];

            if (($stop !== $stopQuestion)) {
                return $this->redirectToRoute("quiz_play", [
                    "id" => $id,
                    "orderQuestion" => $stop
                ]);
            }
        }

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        if ($quiz) {
           return $this->render("Quiz/quiz.html.twig", [
               "rate" => $rate,
               "time" => $time,
               "quiz" => $quiz
           ]);
        }

        return $this->redirectToRoute("quiz_index");
    }

    /**
     * @Route("/quiz/play/{id}/{orderQuestion}", name="quiz_play", requirements={"id"="\d+", "question"="\d+"})
     *
     * @param int $orderQuestion
     * @param Quiz $quiz
     *
     * @return Response
     */
    public function play(
        int $orderQuestion,
        Quiz $quiz
    ): Response
    {
        $question = $quiz->getQuestions();

        return $this->render("Quiz/play.html.twig", [
            "quiz" => $quiz,
            "count" => count($question),
            "question" => $question[$orderQuestion],
            "orderQuestion" => $orderQuestion
        ]);
    }

    /**
     * @Route("/check/{id}/{answer}/{quizId}",
     *     name="answer_check",
     *     requirements={"id"="\d+", "answer"="\d+", "quizId"="\d+"})
     *
     * @param string $answer
     * @param QuestionRepository $questionRepository
     * @param string $id
     * @param string $quizId
     * @param QuizRepository $quizRepository
     *
     * @return Response
     */
    public function check(
        string $id,
        string $answer,
        string $quizId,
        QuizRepository $quizRepository,
        QuestionRepository $questionRepository
    ): Response
    {
        $question = $questionRepository->find($id);
        $user = $this->getUser();

        $rating = $user->getRating();
        $quizName = $quizRepository->find($quizId)->getName();
        $rating[$quizName][4]++;

        if ($question->getAnswers()[$answer]) {
            $rating[$quizName][3]++;
            $user->setRating($rating);

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();
            return new Response();
        } else {
            $user->setRating($rating);

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();
            return new Response("", 303);
        }
    }

    /**
     * @Route("/finish/quiz/{id}", name="quiz_finish", requirements={"id"="\d+"})
     *
     * @param string $id
     * @param QuizRepository $quizRepository
     *
     * @return Response
     */
    public function finish(string $id, QuizRepository $quizRepository): Response
    {
        $user = $this->getUser();
        $quiz = $quizRepository->find($id);
        $quizName = $quiz->getName();

        $startTime = new \DateTime($user->getRating()[$quizName][0]["date"]);
        $endTime = new \DateTime();
        $time = $startTime->diff($endTime);
        $point = $user->getRating()[$quizName][3];
        $stop = $user->getRating()[$quizName][4];

        $rating[$quizName][0] = $startTime;
        $rating[$quizName][1] = $endTime;
        $rating[$quizName][2] = $time;
        $rating[$quizName][3] = $point;
        $rating[$quizName][4] = $stop;

        $user->setRating($rating);

        $topPlayers = $quiz->getRating();

        $topPlayers[$user->getUsername()] = [intval($time->format("%s")), $point];

        $quiz->setRating($topPlayers);

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return $this->redirectToRoute("quiz_show", [
            "id" => $quiz->getId()
        ]);
    }
}