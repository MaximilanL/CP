<?php

namespace App\Controller;

use App\Entity\Answer;
use App\Entity\Question;
use App\Entity\Quizes;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends Controller
{
    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        return $this->render('index.html.twig');
    }

    /**
     * @Route("/main", name="main")
     */
    public function main()
    {

        $quizes= $this->getDoctrine()->getRepository(Quizes::class)->findAll();
        return $this->render('Quizes/main.html.twig', array('quizes' => $quizes));
    }

    /**
     * @Route("/quiz/{id}", name="quiz_show")
     */
    public function show($id)
    {
        $quiz= $this->getDoctrine()->getRepository(Quizes::class)->find($id);
        $questions= $this->getDoctrine()->getRepository(Question::class)->findAll();
        return $this->render('Quizes/show.html.twig', array('quiz' => $quiz));
    }
}
