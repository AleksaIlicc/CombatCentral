import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/shared/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AthletesService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async findAll() {
    return await this.userRepository.find({where: {role: 'athlete'}});
  }
}
