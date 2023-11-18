import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { grpcClientOptions } from './grpc-client.options';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [HeroModule, GrpcReflectionModule.register(grpcClientOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
