/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

// properties for input from the client
// Air properties are needed as a decorators from nestJS for swagger
export class LoginUserDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ minLength: 6 })
    @MinLength(6)
    password: string;
}
