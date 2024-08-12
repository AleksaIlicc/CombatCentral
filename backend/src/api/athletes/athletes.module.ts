import { Module } from '@nestjs/common';
import { AthletesController } from './athletes.controller';
import { AthletesService } from './athletes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/shared/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AthletesController],
  providers: [AthletesService],
})
export class AthletesModule {}
