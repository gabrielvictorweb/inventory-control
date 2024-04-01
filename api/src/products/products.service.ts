import { Injectable } from '@nestjs/common';
import { Products } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductsDto } from './dtos/CreateProductsDto';
import { UpdateProductsDto } from './dtos/UpdateProductsDto';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    async findAll(page: string = '0', perPage: string = '10'): Promise<{ products: Products[], total: number, page: number, perPage: number }> {
        const [products, total] = await this.prisma.$transaction([
            this.prisma.products.findMany({
                skip: Number(perPage) * Number(page),
                take: Number(perPage),
            }),
            this.prisma.products.count()
        ]);

        return { products, total, page: Number(page), perPage: Number(perPage) };
    }

    async findOne(id: number): Promise<Products> {
        return this.prisma.products.findUnique({ where: { id } });
    }

    async save(createProductsDto: CreateProductsDto): Promise<unknown> {
        return this.prisma.products.create({ data: createProductsDto });
    }

    async update(updateProductsDto: UpdateProductsDto, id: number): Promise<unknown> {
        return this.prisma.products.update({ where: { id }, data: updateProductsDto });
    }

    async delete(id: number): Promise<unknown> {
        return this.prisma.products.delete({ where: { id } });
    }
}
