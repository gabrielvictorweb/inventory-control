import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
            throw new BadRequestException('Product out of stock.');
        } else if (product && product.stock < createPurchaseDto.quantity) {
            throw new BadRequestException('Insufficient quantity.');
        }

        // creating purchase and update stock after purchase
        const purchase = {
            productId: product.id,
            quantity: createPurchaseDto.quantity,
            authorId: idUser,
            price: (Number(product.price) * createPurchaseDto.quantity).toString()
        }

        return this.prisma.$transaction([
            this.prisma.purchase.create({ data: purchase }),
            this.prisma.products.update({
                where: { id: createPurchaseDto.idProduct }, data: {
                    stock: product.stock - createPurchaseDto.quantity,
                },
            })
        ]);
    }
}
