import { Body, Controller, Post } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(body.password, 11);
    return this.authService.create({
      ...body,
      password: hashedPassword,
    });
  }

  @Post('/login')
  async login(@Body() body: LoginUserDto) {}
}
