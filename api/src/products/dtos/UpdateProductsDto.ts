import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsUrl } from 'class-validator';

export class UpdateProductsDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsUrl()
    image: string;

    @ApiProperty()
    @IsDecimal()
    price: string;

    @ApiProperty()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    stock: number;
}