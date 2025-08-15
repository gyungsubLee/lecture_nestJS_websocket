import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { AppController } from './app.controller';
import { ChatModule } from './chat/chat.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const uri =
          config.get<string>('MONGODB_URI') ?? 'mongodb://localhost/nest';

        // MODE=dev 이면 Mongoose 디버그 ON
        const debug =
          (config.get<string>('MODE') ?? '').toLowerCase() === 'dev';
        mongoose.set('debug', debug);

        return {
          uri,
          serverSelectionTimeoutMS: 5000,
        };
      },
    }),

    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
