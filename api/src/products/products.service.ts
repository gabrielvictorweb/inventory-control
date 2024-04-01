import { Injectable } from '@nestjs/common';
import { Products } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductsDto } from './dtos/CreateProductsDto';
import { UpdateProductsDto } from './dtos/UpdateProductsDto';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<Products[] | undefined> {
        return this.prisma.products.findMany();
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
