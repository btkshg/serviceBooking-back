/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ minLength: 6 })
    @MinLength(6)
    password: string;
}
