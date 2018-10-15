<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\Quiz;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Question', TextType::class, [
                'label' => 'Question:'
            ])
            ->add('AnswerTrue', TextType::class, [
                'label' => 'Answer:'
            ])
            ->add('AnswerFalseOne', TextType::class, [
                'label' => 'Wrong answer one:'
            ])
            ->add('AnswerFalseTwo', TextType::class, [
                'label' => 'Wrong answer two:'
            ])
            ->add('AnswerFalseThree', TextType::class, [
                'label' => 'Wrong answer three:'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
}
