import { PrismaClient, User } from '@prisma/client';
import * as faker from 'faker';

const prisma = new PrismaClient();

const fakerUser = () => ({
    name: faker.name.firstName() + faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    typeId: 1
});

async function main() {
    console.log('Seeding Users...');

    // Type Users
    await prisma.typeUser.create({
        data: {
            name: 'Administrador',
        }
    });

    const fakerRounds = 5;
    for (let i = 0; i < fakerRounds; i++) {
        await prisma.user.create({ data: fakerUser() });
    }
};

const UsersSeeder = () => {
    main()
        .catch((e) => console.error(e))
        .finally(async () => {
            await prisma.$disconnect();
        });
}

export default UsersSeeder;