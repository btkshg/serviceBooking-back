// A class that defines the shape of data expected from the client
import { IsDateString, IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BookingStatus } from '../../entity/order.entity';

export class CreateOrderDto {
  @ApiProperty({ example: 1, description: 'ID of user that placing order' })
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ example: 2, description: 'ID of service which is picked' })
  @IsNotEmpty()
  serviceId: number;

  @ApiProperty({
    example: '2025-05-30',
    description: 'Date of the booking (YYYY-MM-DD)',
  })
  @IsDateString()
  date: string;

  @ApiProperty({ example: '12:00', description: 'Time of the booking (HH:mm)' })
  @IsNotEmpty()
  time: string;

  // use enum because we have statuses explained in the properties before
  @ApiProperty({ enum: BookingStatus, example: BookingStatus.PENDING })
  @IsEnum(BookingStatus)
  status: BookingStatus;
}
