import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'; // standart input for typeORM db

/**
 * Service entity represents services that will be listed in the system
 */
@Entity()
export class Service {
  /**
   * Special service id
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Service name
   */
  @Column()
  name: string;

  /**
   * Service description
   */
  @Column({ nullable: true })
  description: string;

  /**
   * Service price
   */
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  /**
   * Service processing time
   */
  @Column({ type: 'int', nullable: true })
  duration: number;

  /**
   * Pic for the service
   */
  @Column({ nullable: true })
  picUrl: string;

  /**
   * When the service created
   */
  @CreateDateColumn()
  createdAt: Date;

  /**
   * When the service updated
   */
  @UpdateDateColumn()
  updatedAt: Date;
}
