// A class that defines the shape of data expected from the client
import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../../entity/user.entity';

/**
 * DTO used when creating a new user
 * It does contain the fields that are used for creating or registering a new or existing user
 * Air properties are needed as a decorators from nestJS for swagger
 */

export class CreateUserDto { // users name
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'user@mail.ru' }) // users mail
  @IsEmail()
  email: string;

  @ApiProperty({ minLength: 6 }) // users pass
  @MinLength(6)
  password: string;

  //since we have roles already, we will use enum here
  @ApiProperty({ enum: UserRole, default: UserRole.USER }) // users role
  @IsEnum(UserRole)
  role: UserRole;
}
