import { Module } from '@nestjs/common';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { grpcClientOptions } from './grpc-client.options';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [HeroModule, GrpcReflectionModule.register(grpcClientOptions)],
  controllers: [],
  providers: [],
})
export class AppModule {}
