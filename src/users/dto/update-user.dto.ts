// That is basically patch function
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

/**
 * DTO used when updating an existing user
 * It works with all fields from CreateUserDTO but its also optional
 * We are using it for pathc requests where we are not usilg all fields to update
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {}
