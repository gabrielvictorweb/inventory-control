import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional } from 'class-validator';

export class ListProductsDto {
    @ApiProperty()
    @IsNumberString()
    @IsOptional()
    page: string;

    @ApiProperty()
    @IsNumberString()
    @IsOptional()
    perPage: string;
}