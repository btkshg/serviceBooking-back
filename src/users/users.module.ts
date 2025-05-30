// Automatically created by nest g resource services
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from '../entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // for typeORM and user.service working
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
