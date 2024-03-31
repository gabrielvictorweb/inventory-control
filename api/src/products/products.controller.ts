import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dtos/CreateProductsDto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }

    @HttpCode(HttpStatus.OK)
    @Get('')
    findAll() {
        return this.productsService.findAll();
    }

    @HttpCode(HttpStatus.OK)
    @Post('')
    save(@Body() createProductsDto: CreateProductsDto) {
        return this.productsService.save(createProductsDto);
    }
}
