import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm'; // standard input for typeORM db

import { User } from './user.entity';
import { Service } from './service.entity';

/**
 * Enum for booking status is a fixed set of allowed values
 */
export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

/**
 * Order entity represents orders that users can create by booking services
 */
@Entity()
export class Order {
  /**
   * Order's id
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * User that is attached to the order
   */
  @ManyToOne(() => User, { eager: true })
  user: User;

  /**
   * Service that is attached to the order
   */
  @ManyToOne(() => Service, { eager: true })
  service: Service;

  /**
   * Date of ordering
   */
  @Column('date')
  date: string;

  /**
   * Ordering time
   */
  @Column('time')
  time: string;

  /**
   * Order's status
   */
  @Column({
    type: 'enum',
    enum: BookingStatus,
    default: BookingStatus.PENDING,
  })
  status: BookingStatus;

  /**
   * When the order created
   */
  @CreateDateColumn()
  createdAt: Date;
}
