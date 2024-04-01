import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Purchase } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePurchaseDto } from './dtos/CreatePurchaseDto';
import { statusPurchase } from 'src/statusPurchase/role.enum';

@Injectable()
export class PurchasesService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<Purchase[] | undefined> {
        return this.prisma.purchase.findMany({
            include: {
                product: true,
            },
        });
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
        const amount = (Number(product.price) * createPurchaseDto.quantity).toString();
        const purchase = {
            productId: product.id,
            quantity: createPurchaseDto.quantity,
            authorId: idUser,
            price: amount,
            statusPurchaseId: statusPurchase.Processing
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

    async delete(id: number, userId: number): Promise<unknown> {
        // find purchase
        const purchase = await this.prisma.purchase.findUnique({ where: { id } });
        if (!purchase) {
            throw new NotFoundException('Not found product.');
        } else if (purchase.authorId !== userId) {
            throw new UnauthorizedException('User is not the owner of the order.');
        }

        return this.prisma.$transaction([
            this.prisma.products.update({
                where: { id: purchase.productId }, data: {
                    stock: { increment: purchase.quantity },
                },
            }),
            this.prisma.purchase.update({
                where: { id }, data: {
                    statusPurchaseId: statusPurchase.Canceled,
                },
            })
        ]);
    }
}
