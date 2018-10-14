<?php

namespace App\DataFixtures;

use App\Entity\Quiz;
use App\Entity\Question;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class QuizzesFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        foreach ($this->getQuizData() as [$name, $activity, $rating]) {
            $quiz = new Quiz();
            $quiz->setName($name);
            $quiz->setIsActive($activity);
            $quiz->setCreateData(new \DateTime());
            $quiz->setRating($rating);

            foreach ($this->getAnswersData() as [$question, $answers]) {
                $ques = new Question();
                $ques->setQuestion($question);
                $ques->setAnswers($answers);
                $quiz->addQuestion($ques);

                $manager->persist($ques);
            }

            $manager->persist($quiz);
        }

        $manager->flush();
    }

    private function getQuizData(): array
    {
        return [
            ['Mathematics', '1', ["admin" => [200, 1], "root" => [300, 2]]],
            ['Physics', '1', ["admin" => [500, 1] , "root" => [600, 1]]],
            ['Biology', '1', ["admin" => [344, 2], "root" => [333, 4]]]
        ];
    }

    private function getAnswersData(): array
    {
        return [
            ['2 + 2 = ?', ["4" => true, "8" => false, "2" => false, "6" => false]],
            ['3 + 3 = ?', ["4" => false, "8" => false, "2" => false, "6" => true]],
            ['4 + 4 = ?', ["4" => false, "8" => true , "2" => false, "6" => false]]
        ];
    }
}
