import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dtos/CreateProductsDto';
import { Roles } from 'src/roles/roles';
import { Role } from 'src/roles/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/roles/role.guard';
import { UpdateProductsDto } from './dtos/UpdateProductsDto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }

    @HttpCode(HttpStatus.OK)
    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @HttpCode(HttpStatus.OK)
    @Get(':id')
    findOne(@Param('id') id) {
        return this.productsService.findOne(id);
    }

    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    @HttpCode(HttpStatus.CREATED)
    @Post()
    save(@Body() createProductsDto: CreateProductsDto) {
        return this.productsService.save(createProductsDto);
    }

    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    @HttpCode(HttpStatus.OK)
    @Delete(':id')
    delete(@Param('id') id) {
        return this.productsService.delete(id);
    }

    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    @HttpCode(HttpStatus.OK)
    @Patch(':id')
    update(@Param('id') id, @Body() updateProductsDto: UpdateProductsDto) {
        return this.productsService.update(updateProductsDto, id);
    }
}
