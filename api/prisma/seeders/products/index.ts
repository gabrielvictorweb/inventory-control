import { PrismaClient } from '@prisma/client';
import { fakerPT_BR as faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const fakerProduct = () => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ category: 'business' }),
    stock: faker.number.int({ max: 50 })
});

async function main() {
    console.log('Seeding Products...');

    const fakerRounds = 50;
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