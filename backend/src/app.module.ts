import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './api/auth/auth.module';
import ormConfig from './config/orm.config';
import { JwtModule } from '@nestjs/jwt';
import { AthletesModule } from './api/athletes/athletes.module';
import { EventsModule } from './api/events/events.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [ormConfig],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfig,
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
      global: true,
    }),
    AuthModule,
    AthletesModule,
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
