// Automatically created by nest g resource services
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

// Because we're using the TypeORM methods, which are parameterized queries internally,
// we dont need to use additional methods to defend db from sql injections

/**
 * It handles http requests for service db
 */

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  /**
   * POST func, used for creating a new service
   */
  @Post()
  create(@Body() createServiceDto: CreateServiceDto) { // Special DTO we created in dto folder
    return this.servicesService.create(createServiceDto);
  }

  /**
   * GET func, used to return all services in the system
   */
  @Get()
  findAll() {
    return this.servicesService.findAll();
  }

  /**
   * GET func again, but we return one specific by id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(+id);
  }

  /**
   * PATCH func, we use for updating data by id
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.servicesService.update(+id, updateServiceDto);
  }

  /**
   * DELETE func, used for deleting service by its id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }
}
