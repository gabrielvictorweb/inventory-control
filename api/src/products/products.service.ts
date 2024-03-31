import { Injectable } from '@nestjs/common';
import { Products } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductsDto } from './dtos/CreateProductsDto';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<Products[] | undefined> {
        return this.prisma.products.findMany();
    }

    async save(product: CreateProductsDto): Promise<unknown> {
        return this.prisma.products.create({ data: product });
    }
}
