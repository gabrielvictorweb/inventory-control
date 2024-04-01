import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Request, UseGuards } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreatePurchaseDto } from './dtos/CreatePurchaseDto';
import { Roles } from 'src/roles/roles';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/role.guard';

@Controller('purchases')
export class PurchasesController {
    constructor(private purchasesService: PurchasesService) { }

    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Get()
    findAll() {
        return this.purchasesService.findAll();
    }

    @Roles(Role.Customer)
    @UseGuards(AuthGuard, RolesGuard)
    @HttpCode(HttpStatus.CREATED)
    @Post()
    save(@Request() req, @Body() createPurchaseDto: CreatePurchaseDto) {
        return this.purchasesService.save(createPurchaseDto, req.user.id);
    }

    @Roles(Role.Customer)
    @UseGuards(AuthGuard, RolesGuard)
    @HttpCode(HttpStatus.OK)
    @Delete(':id')
    delete(@Request() req, @Param('id') id) {
        return this.purchasesService.delete(id, req.user.id);
    }
}   
