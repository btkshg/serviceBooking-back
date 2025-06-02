// Automatically created by nest g resource orders
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entity/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

// Finished typeORM logic
@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  /**
   * Creates a new order with data set from user and service entitity (their ids)
   */
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const { userId, serviceId, date, time, status } = createOrderDto;

    const order = this.orderRepository.create({
      user: { id: userId }, // set relation by id
      service: { id: serviceId }, // set relation by id
      date,
      time,
      status,
    });

    return this.orderRepository.save(order);
  }

  /**
   * Returns all orders that we have in system with their user and service relations
   */
  async findAll(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['user', 'service'],
    });
  }

  /**
   * Return a single order by its id also with related entities
   */
  async findOne(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['user', 'service'],
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return order;
  }

  // fixed by prittier formatter
  /**
   * Updates order by its id with given values
   * Or throwing an error if its not existing
   */
  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    await this.orderRepository.update(id, updateOrderDto);
    const updated = await this.orderRepository.findOne({
      where: { id },
      relations: ['user', 'service'],
    });

    if (!updated) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return updated;
  }

  /**
   * This one used for removing an existing order or again throwing an error
   */
  async remove(id: number): Promise<void> {
    const result = await this.orderRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
  }

  async findByDate(date: string): Promise<Order[]> {
    return this.orderRepository.find({
      where: { date: date },
    });
  }

  async findByUser(userId: number): Promise<Order[]> {
    return this.orderRepository.find({
      where: { user: { id: userId } },
      relations: ['user', 'service'],
    });
  }
}
