import { Transport } from '@nestjs/microservices';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';
import { join } from 'path';

export const grpcClientOptions = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    url: '127.0.0.1:3000',
    package: 'hero',
    protoPath: join(__dirname, '../hero/hero.proto'),
  },
});
