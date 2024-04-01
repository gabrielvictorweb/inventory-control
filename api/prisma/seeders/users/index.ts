import { PrismaClient, User } from '@prisma/client';
import * as faker from 'faker';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const saltOrRounds = 10;
const passwordDefault = '123456';

const fakerCustomer = () => ({
    name: faker.name.firstName() + faker.name.lastName(),
    email: faker.internet.email(),
    typeId: 2
});

const fakerAdmin = () => ({
    name: 'Admin',
    email: 'admin@local.com',
    typeId: 1
});

async function main() {
    console.log('Seeding Users...');

    const status = await prisma.user.findMany();
    if (status.length > 0) {
        return;
    }

    const hash = await bcrypt.hash(passwordDefault, saltOrRounds);
    await prisma.user.create({ data: { ...fakerAdmin(), password: hash } });

    const fakerRounds = 3;
    for (let i = 0; i < fakerRounds; i++) {
        const hash = await bcrypt.hash(passwordDefault, saltOrRounds);
        await prisma.user.create({ data: { ...fakerCustomer(), password: hash } });
    }
};

const UsersSeeder = async () => {
    try {
        await main();
    } catch (e) {
        console.error(e)
    } finally {
        await prisma.$disconnect();
    }
}

export default UsersSeeder;