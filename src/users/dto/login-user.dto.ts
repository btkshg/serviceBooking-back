import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';


/**
 * DTO that is used for login page
 */
export class LoginUserDto {
  @ApiProperty() // users name
  @IsNotEmpty()
  name: string;

  @ApiProperty({ minLength: 6 }) // users passwd
  @MinLength(6)
  password: string;
}
