import { Module } from '@nestjs/common';
import { KafkaConsumer } from 'nestjs-kafka';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  controllers: [EventController],
  providers: [
    EventService,
    {
      provide: 'EVENT_CREATED_CONSUMER',
      useFactory: (kafkaConsumer: KafkaConsumer) => {
        return kafkaConsumer.connect({
          topic: 'event_created',
          // Configure consumer options, e.g., groupId
        });
      },
      inject: [KafkaConsumer],
    },
  ],
})
export class EventManagementModule {}