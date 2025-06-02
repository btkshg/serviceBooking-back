// That is basically patch function
import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

/**
 * DTO for updating an order
 * It works with all fields from CreateOrderDTO, but it makes them optional
 * We use it for patch requests
 */

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
