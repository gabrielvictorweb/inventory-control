import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dtos/CreateProductsDto';
import { Roles } from 'src/roles/roles';
import { Role } from 'src/roles/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/roles/role.guard';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }

    @HttpCode(HttpStatus.OK)
    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    @HttpCode(HttpStatus.CREATED)
    @Post()
    save(@Body() createProductsDto: CreateProductsDto) {
        return this.productsService.save(createProductsDto);
    }
}
