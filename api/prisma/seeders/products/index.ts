import { PrismaClient, User } from '@prisma/client';
import * as faker from 'faker';

const prisma = new PrismaClient();

const fakerProduct = () => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.food(),
    stock: faker.datatype.number({
        'min': 10,
        'max': 50
    })
});

async function main() {
    console.log('Seeding Products...');

    const fakerRounds = 5;
    for (let i = 0; i < fakerRounds; i++) {
        await prisma.products.create({ data: fakerProduct() });
    }
};

const ProductSeeder = async () => {
    try {
        await main();
    } catch (e) {
        console.error(e)
    } finally {
        await prisma.$disconnect();
    }
}

export default ProductSeeder;