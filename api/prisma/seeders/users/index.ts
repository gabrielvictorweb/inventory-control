import { PrismaClient } from '@prisma/client';
import { fakerPT_BR as faker } from '@faker-js/faker';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const saltOrRounds = 10;
const passwordDefault = '123456';

const fakerCustomer = () => ({
    name: faker.person.firstName() + faker.person.lastName(),
    email: 'customer@local.com',
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

    var hash = await bcrypt.hashSync(passwordDefault, saltOrRounds);
    await prisma.user.create({ data: { ...fakerAdmin(), password: hash } });

    hash = await bcrypt.hashSync(passwordDefault, saltOrRounds);
    await prisma.user.create({ data: { ...fakerCustomer(), password: hash } });
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