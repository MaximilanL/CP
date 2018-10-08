<?php

namespace App\Controller;

use App\Entity\Answer;
use App\Entity\Question;
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
    public function admin()
    {

        return $this->render('Quizes/main.html.twig');
    }


}
