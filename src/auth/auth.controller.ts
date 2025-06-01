import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login') // /auth/login
  async login(@Body() loginDto: LoginUserDto) {
    const user = await this.usersService.findByName(loginDto.name);

    if (!user || user.password !== loginDto.password) {
      throw new UnauthorizedException('Invalid username or password');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }
}
