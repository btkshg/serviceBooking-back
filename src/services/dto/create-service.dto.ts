// A class that defines the shape of data expected from the client
import { IsNotEmpty, IsOptional, IsNumber, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty({ example: 'Cleaning Windows' })
  @IsNotEmpty()
  name: string;

  // fixed by preettier looking
  @ApiPropertyOptional({
    example: 'We cleaning fully all the windows in the car',
  })
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 49.99, minimum: 0 })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiPropertyOptional({ example: 30, description: 'Duration in minutes' })
  @IsOptional()
  @IsNumber()
  duration?: number;
}
