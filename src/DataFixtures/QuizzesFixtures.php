<?php

namespace App\DataFixtures;

use App\Entity\Quiz;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Validator\Constraints\Date;

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

            $manager->persist($quiz);
        }

        $manager->flush();
    }

    private function getQuizData(): array
    {
        return [
            ['Mathematics', '1', []],
            ['Physics', '1', []],
            ['Biology', '1', []]
        ];
    }
}
