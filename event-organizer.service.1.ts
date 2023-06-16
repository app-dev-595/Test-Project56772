import { KafkaProducer } from 'nestjs-kafka';

@Injectable()
export class EventOrganizerService {
  constructor(private readonly kafkaProducer: KafkaProducer) {}

  async create(eventOrganizer: EventOrganizer): Promise<EventOrganizer> {
    // Code to create the event organizer

    // Publish event_created message to Kafka
    await this.kafkaProducer.send({
      topic: 'event_created',
      messages: [{ value: JSON.stringify(eventOrganizer) }],
    });

    return eventOrganizer;
  }

  // Rest of the service code...
}