import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'; // standart input for typeORM db

/**
 * Enum with fixed set of allowed user roles
 */
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

/**
 * User entity represents the users that will approach the website
 */
@Entity()
export class User {
  /**
   * User's id
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * User's name
   */
  @Column()
  name: string;

  /**
   * User's email addresss
   */
  @Column({ unique: true })
  email: string;

  /**
   * User's passwrd
   */
  @Column()
  password: string;

  /**
   * User's role that allows system to give the right permissions
   */
  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  /**
   * Creation date
   */
  @CreateDateColumn()
  createdAt: Date;

  /**
   * Updating date
   */
  @UpdateDateColumn()
  updatedAt: Date;
}
