import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseDto {
    @ApiProperty()
    idProduct: number;

    @ApiProperty()
    quantity: number;
}