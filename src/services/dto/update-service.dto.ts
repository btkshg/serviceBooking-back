// That is basically patch function
import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';

/**
 * DTO for updating a service
 * It works with all fields from CreateServiceDTO, but it makes them optional
 * We use it for patch requests
 */

export class UpdateServiceDto extends PartialType(CreateServiceDto) {}
