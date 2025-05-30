// Automatically created by nest g resource services
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { Service } from '../entity/service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service])], // For TypeORM Db
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}
