import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Res,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService
  ) {}

  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(body.password, 11);

    const user = this.authService.create({
      ...body,
      password: hashedPassword,
    });

    const { password, ...result } = await user;

    return result;
  }

  @Post('/login')
  async login(
    @Body() body: LoginUserDto,
    @Res({ passthrough: true }) response: Response
  ) {
    const user = await this.authService.findOne(body);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    if (!(await bcrypt.compare(body.password, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });

    response.cookie('jwt', jwt, { httpOnly: true, secure: true });

    return {
      message: 'Success',
    };
  }
}
