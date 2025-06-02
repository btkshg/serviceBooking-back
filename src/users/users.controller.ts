// Automatically created by nest g resource services
// Controller for handling all user-related routes

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// Because we're using the TypeORM methods, which are parameterized queries internally,
// we dont need to use additional methods to defend db from sql injections
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Special DTO we created in dto folder
  // Need to be commented (each section with NULL values as well)

  /**
   * POST func, for creating a new user. It must match the dto structure
   * (It works for every func, so I wont repeat it)
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  /**
   * GET func, fetch all users from db
   */
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  /**
   * Same as previous, but we fetch by id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  /**
   *  PATCH func, we update user details by id
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  /**
   * DELETE func, for deleting user by id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
