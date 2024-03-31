import { Injectable, NotFoundException } from '@nestjs/common';
import { Purchase } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePurchaseDto } from './dtos/CreatePurchaseDto';
import { create } from 'domain';

@Injectable()
export class PurchasesService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<Purchase[] | undefined> {
        return this.prisma.purchase.findMany();
    }

    async save(createPurchaseDto: CreatePurchaseDto, idUser: number): Promise<unknown> {
        // find product
        const product = await this.prisma.products.findUnique({ where: { id: createPurchaseDto.idProduct } });
        if (!product) {
            throw new NotFoundException('Not found product.');
        } else if (product && product.stock === 0) {
            throw new NotFoundException('Not found product.');
        }

        // creating purchase
        const purchase = {
            productId: product.id,
            quantity: createPurchaseDto.quantity,
            authorId: idUser,
            price: (Number(product.price) * createPurchaseDto.quantity).toString()
        }
        await this.prisma.purchase.create({ data: purchase });

        // update stock after purchase
        return this.prisma.products.update({
            where: { id: createPurchaseDto.idProduct }, data: {
                stock: product.stock - createPurchaseDto.quantity,
            },
        });
    }
}
