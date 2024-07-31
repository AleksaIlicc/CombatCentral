import { Body, Controller, Post } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
) {}

  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    this.authService.create({
      ...body,
      password: hashedPassword,
    });
  }
}
