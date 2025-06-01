// Automatically created by nest g resource services
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from '../entity/user.entity';
import { AuthController } from 'src/auth/auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // for typeORM and user.service working
  controllers: [UsersController, AuthController],
  providers: [UsersService],
})
export class UsersModule {}
