import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from '../entity/user.entity'; // Import your entity

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register entity
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
