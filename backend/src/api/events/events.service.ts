import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/shared/entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private readonly eventRepository: Repository<Event>
  ) {}

  async findAll() {
    return await this.eventRepository.find();
  }
}
