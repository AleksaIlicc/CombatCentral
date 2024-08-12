import { Controller, Get } from '@nestjs/common';
import { AthletesService } from './athletes.service';

@Controller('/athletes')
export class AthletesController {
  constructor(private readonly athletesService: AthletesService) {}

  @Get('/find-all')
  async findAll() {
    return await this.athletesService.findAll();
  }
}
