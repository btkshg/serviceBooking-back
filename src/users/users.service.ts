import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Creates a new user
   * We use hashing method (hashedPassword value) to hash the pass before adding to db
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return this.userRepository.save(user);
  }

  /**
   * Returns all users that we have
   */
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  /**
   * Returns one user by id
   * If noone found, null is returnd
   */
  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  /**
   * Updates user data by id
   * If user is existed returns it
   */
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    await this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOneBy({ id });
  }

  /**
   * Deletes a user by id from system
   */
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  /**
   * Finds a user by their name
   * If noone found, returns null
   */
  async findByName(name: string): Promise<User | null> {
    return this.userRepository.findOneBy({ name });
  }
}
