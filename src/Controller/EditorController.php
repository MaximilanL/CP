<?php

declare(strict_types = 1);

namespace App\Controller;

use App\Entity\Question;
use App\Entity\Quiz;
use App\Form\QuestionType;
use App\Repository\QuestionRepository;
use App\Repository\QuizRepository;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class EditorController extends Controller
{

    /**
     * @Route("/edit/quiz/{id}", name="quiz_edit", requirements={"id"="\d+"})
     *
     * @param Request $request
     * @param QuestionRepository $questionRepository
     * @param QuizRepository $quizRepository
     * @param string id
     *
     * @return Response
     */
    public function editQuiz(
        Request $request,
        QuestionRepository $questionRepository,
        QuizRepository $quizRepository,
        string $id
    ): Response
    {
        $quiz = $quizRepository->find($id);

        $allQuestionsQuery = $questionRepository->findAll();

        $questionWithRelatives = $quiz->getQuestions();

        $paginator = $this->get('knp_paginator');

        $questions = $paginator->paginate(
            $allQuestionsQuery,
            $request->query->getInt('page', 1),
            4
        );

        return $this->render("Editor/edit-quiz.html.twig", [
            "quiz" => $quiz,
            "questions" => $questions,
            "relationshipQuestions" => $questionWithRelatives
        ]);
    }

    /**
     * @Route("/new/quiz", name="quiz_create")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function createQuiz(Request $request): Response
    {
        $quiz = new Quiz();

        $form = $this->createFormBuilder($quiz)
            ->add('name', TextType::class)
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $quiz = $form->getData();
            $quiz->setCreateData(new \DateTime());
            $quiz->setIsActive(true);
            $quiz->setRating([
                "root" => [0, 0]
            ]);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($quiz);
            $entityManager->flush();

            return $this->redirectToRoute('quiz_edit', [
                'id' => $quiz->getId()
            ]);
        }

        return $this->render('Editor/create-quiz.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/question/new/{id}"),
     *          name="app_editor_createquestion",
     *          requirements={"id"="\d+"},
     *          methods="POST")
     *
     * @param Request $request
     * @param string $id
     *
     * @return Response
     */
    public function createQuestion(Request $request, string $id): Response
    {
        $form = $this->createForm(QuestionType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $question = new Question();

            $question->setQuestion($form->getData()["Question"]);

            $answers = [
                $form->getData()["AnswerTrue"] => true,
                $form->getData()["AnswerFalseOne"] => false,
                $form->getData()["AnswerFalseTwo"] => false,
                $form->getData()["AnswerFalseThree"] => false,
            ];

            $question->setAnswers($answers);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($question);
            $entityManager->flush();

            return $this->redirectToRoute('quiz_edit', [
                "id" => $id
            ]);
        }

        return $this->render('Editor/create-question.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/question/{id}/delete", name="deleting_question", requirements={"id"="\d+"})
     *
     * @param string $id
     * @param QuestionRepository $questionRepository
     *
     * @return Response
     */
    public function delete(
        string $id,
        QuestionRepository $questionRepository
    ): Response
    {
        $question = $questionRepository->find($id);
        $em = $this->getDoctrine()->getManager();

        if ($question) {
            $em->remove($question);
            $em->flush();
        }

        return new Response();
    }
}
