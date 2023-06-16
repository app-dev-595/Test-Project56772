import { Module } from '@nestjs/common';
import { KafkaEventModule } from './kafka.module';
import { EventOrganizerModule } from './event-organizer/event-organizer.module';
import { EventManagementModule } from './event-management/event-management.module';

@Module({
  imports: [
    KafkaEventModule,
    EventOrganizerModule,
    EventManagementModule,
  ],
})
export class AppModule {}