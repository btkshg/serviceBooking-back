// Automatically created by nest g resource orders
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from '../entity/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order])], // needed for typeORM
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
