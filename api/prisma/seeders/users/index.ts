import { PrismaClient, User } from '@prisma/client';
import * as faker from 'faker';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const saltOrRounds = 10;
const passwordDefault = '123456';

const fakerUser = () => ({
    name: faker.name.firstName() + faker.name.lastName(),
    email: faker.internet.email(),
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
        const hash = await bcrypt.hash(passwordDefault, saltOrRounds);
        await prisma.user.create({ data: { ...fakerUser(), password: hash } });
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