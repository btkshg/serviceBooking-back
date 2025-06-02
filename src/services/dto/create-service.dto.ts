// A class that defines the shape of data expected from the client
import { IsNotEmpty, IsOptional, IsNumber, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * DTO used for creating a new service
 * Its validating data from front when the data or info is added
 * Air properties are needed as a decorators from nestJS for swagger and systems with inputs
 */

export class CreateServiceDto {
  @ApiProperty({ example: 'Cleaning Windows' }) // service's name
  @IsNotEmpty()
  name: string;

  // fixed by preettier looking
  @ApiPropertyOptional({ // service's description
    example: 'We cleaning fully all the windows in the car',
  })
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 15.59, minimum: 0 }) // service's price
  @IsNumber()
  @Min(0)
  price: number;

  @ApiPropertyOptional({ example: 15, description: 'Duration in minutes' }) // service's duration time
  @IsOptional()
  @IsNumber()
  duration?: number;
}
