import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreatePurchaseDto } from './dtos/CreatePurchaseDto';

@Controller('purchases')
export class PurchasesController {
    constructor(private purchasesService: PurchasesService) { }

    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Get('')
    findAll() {
        return this.purchasesService.findAll();
    }

    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('')
    save(@Request() req, @Body() createPurchaseDto: CreatePurchaseDto) {
        return this.purchasesService.save(createPurchaseDto, req.user.id);
    }
}   
