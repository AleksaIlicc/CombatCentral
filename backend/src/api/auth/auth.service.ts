import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/shared/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(data: CreateUserDto) : Promise<User> {
    return await this.userRepository.save(data);
  }

  async findOne(data: LoginUserDto) : Promise<User> {
    return await this.userRepository.findOne({where: {email: data.email}});
  }
}
