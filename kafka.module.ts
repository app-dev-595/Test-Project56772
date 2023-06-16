import { Module } from '@nestjs/common';
import { KafkaOptions, KafkaModule } from 'nestjs-kafka';

@Module({
  imports: [
    KafkaModule.register({
      brokers: ['kafka-broker-url:9092'],
      clientId: 'event-management',
    }),
  ],
})
export class KafkaEventModule {}