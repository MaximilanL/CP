<?php

namespace App\Repository;

use App\Entity\Quizes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

class QuizesRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Quizes::class);
    }

    /*
    public function findBySomething($value)
    {
        return $this->createQueryBuilder('q')
            ->where('q.something = :value')->setParameter('value', $value)
            ->orderBy('q.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */
}
