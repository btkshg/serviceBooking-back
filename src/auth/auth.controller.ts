import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
@Post('login')
  async login(@Body() loginDto: LoginUserDto) {
    return this.authService.login(loginDto.name, loginDto.password);
  }
}