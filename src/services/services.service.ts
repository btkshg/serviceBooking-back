// Automatically created by nest g resource services
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from '../entity/service.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

// Finished typeORM logic
@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  /**
   * Creates a new service using the data from front
   */
  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const service = this.serviceRepository.create(createServiceDto);
    return this.serviceRepository.save(service);
  }

  /**
   * Finds all services we have and return it
   */
  async findAll(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  /**
   * Find a service by its id
   */
  async findOne(id: number): Promise<Service> {
    const service = await this.serviceRepository.findOneBy({ id });
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return service;
  }

  // fixed by quick formatter
  /**
   * Updates a service by id by taking data from front
   */
  async update(
    id: number,
    updateServiceDto: UpdateServiceDto,
  ): Promise<Service> {
    await this.serviceRepository.update(id, updateServiceDto);
    const updated = await this.serviceRepository.findOneBy({ id });
    if (!updated) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return updated;
  }

  /**
   * Deletes service by its id
   */
  async remove(id: number): Promise<void> {
    const result = await this.serviceRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
  }
}
