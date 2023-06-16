import { Module } from '@nestjs/common';
import { KafkaConsumer } from 'nestjs-kafka';
import { EventOrganizerController } from './event-organizer.controller';
import { EventOrganizerService } from './event-organizer.service';

@Module({
  controllers: [EventOrganizerController],
  providers: [
    EventOrganizerService,
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
export class EventOrganizerModule {}