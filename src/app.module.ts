import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenaiController } from './genai/genai/genai.controller';
import { GenaiService } from './genai/genai/genai.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  controllers: [AppController, GenaiController],
  providers: [AppService, GenaiService],
})
export class AppModule {}
