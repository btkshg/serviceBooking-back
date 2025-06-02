// A class that defines the shape of data expected from the client
import { IsDateString, IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BookingStatus } from '../../entity/order.entity';

/**
 * Data Transfer Object for creating a new order
 * This is used to validate and document incoming order data from the client side
 * And allowing us to use the inputs and store actuall data in the db
 * Air properties are needed as a decorators from nestJS for swagger and systems with inputs
 */
export class CreateOrderDto {
  @ApiProperty({ example: 1, description: 'User ID who is making the order' }) // user's id
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ example: 2, description: 'ID of the selected service' }) // service's id
  @IsNotEmpty()
  serviceId: number;

  @ApiProperty({ // date of creating order
    example: '2025-05-30',
    description: 'Booking date in YYYY-MM-DD format',
  })
  @IsDateString()
  date: string;

  //fixed by prettier lloking
  @ApiProperty({ // time when the order was expexted to be
    example: '12:00',
    description: 'Booking time in HH:mm format',
  })
  @IsNotEmpty()
  time: string;

  @ApiProperty({ // status of order
    enum: BookingStatus,
    example: BookingStatus.PENDING,
    description: 'Current status of the booking',
  })
  @IsEnum(BookingStatus)
  status: BookingStatus;
}
