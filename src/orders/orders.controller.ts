// Automatically created by nest g resource orders
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Query } from '@nestjs/common';

// Because we're using the TypeORM methods, which are parameterized queries internally,
// we dont need to use additional methods to defend db from sql injections
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  /**
   * POST func, used to create a new order
   */
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  /**
   * GET func, used to return all orders we have in system
   */
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  /**
   * GET func again, but we return one specific by date
   */
  @Get('by-date')
  getByDate(@Query('date') date: string) {
    return this.ordersService.findByDate(date);
  }

  /**
   * GET func again, but we return all orders specific by users id
   */
  @Get('user/:id')
  findByUser(@Param('id') id: string) {
    return this.ordersService.findByUser(+id);
  }

  /**
   * GET func again, but we return a specific one by id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  /**
   * PATCH func, used to update an existing order
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  /**
   * DELETE func, used to delete an order by its id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
