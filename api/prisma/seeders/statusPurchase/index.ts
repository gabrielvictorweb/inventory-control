import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Status Purchase...');
    const status = await prisma.statusPurchase.findMany();
    if (status.length > 0) {
        return;
    }

    await prisma.statusPurchase.create({ data: { name: 'canceled' } });
    await prisma.statusPurchase.create({ data: { name: 'delivered' } });
    await prisma.statusPurchase.create({ data: { name: 'processing' } });
};

const StatusPurchaseSeeder = async () => {
    try {
        await main();
    } catch (e) {
        console.error(e)
    } finally {
        await prisma.$disconnect();
    }
}

export default StatusPurchaseSeeder;