import { Transport } from '@nestjs/microservices';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';

export const grpcClientOptions = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    url: '127.0.0.1:3000',
    package: 'hero',
    protoPath: 'src/hero/hero.proto',
  },
});
