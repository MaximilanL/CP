<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UsersFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        foreach ($this->getUserData() as [$fullname, $username, $password, $email, $activity, $roles]) {
            $user = new User();
            $user->setFullName($fullname);
            $user->setUsername($username);
            $user->setPassword($this->passwordEncoder->encodePassword($user, $password));
            $user->setEmail($email);
            $user->setActivity($activity);
            $user->setRoles($roles);
            $user->setRating([]);

            $manager->persist($user);
            $this->addReference($username, $user);
        }

        $manager->flush();
    }

    private function getUserData(): array
    {
        return [
            ['admin', 'admin', 'admin', 'admin@mail.com', '0', ['ROLE_ADMIN']],
            ['ruslan', 'ruslan', 'ruslan', 'r.kravchukr@gmail.com', '0', ['ROLE_ADMIN']],
            ['root', 'root', 'root', 'root@mail.com', '0', ['ROLE_ADMIN']],
            ['helper', 'helper', 'helper', 'helper@mail.com', '0', ['ROLE_ADMIN']],
            ['justUser', 'justUser', 'justUser', 'justUser@mail.com', '0', ['ROLE_ADMIN']],
            ['andOneMore', 'andOneMore', 'andOneMore', 'andOneMore@mail.com', '0', ['ROLE_ADMIN']],
            ['Jane Doe', 'jane_admin', 'kitten', 'jane_admin@symfony.com', '0', ['ROLE_ADMIN']],
            ['Tom Doe', 'tom_admin', 'kitten', 'tom_admin@symfony.com', '0', ['ROLE_ADMIN']],
            ['John Doe', 'john_user', 'kitten', 'john_user@symfony.com', '0', ['ROLE_USER']],
        ];
    }
}
