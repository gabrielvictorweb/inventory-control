import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Type User...');
    const status = await prisma.typeUser.findMany();
    if (status.length > 0) {
        return;
    }

    await prisma.typeUser.create({
        data: {
            name: 'Admin',
        }
    });

    await prisma.typeUser.create({
        data: {
            name: 'Customer',
        }
    });
};

const TypeUserSeeder = async () => {
    try {
        await main();
    } catch (e) {
        console.error(e)
    } finally {
        await prisma.$disconnect();
    }
}

export default TypeUserSeeder;