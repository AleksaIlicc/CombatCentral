import { Body, Controller, Post } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() body) {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    return this.authService.create({
      ...body,
      password: hashedPassword,
    });
  }
}
