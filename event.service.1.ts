import { KafkaProducer } from 'nestjs-kafka';

@Injectable()
export class EventService {
  constructor(private readonly kafkaProducer: KafkaProducer) {}

  async create(event: Event): Promise<Event> {
    // Code to create the event

    // Publish event_created message to Kafka
    await this.kafkaProducer.send({
      topic: 'event_created',
      messages: [{ value: JSON.stringify(event) }],
    });

    return event;
  }

  // Rest of the service code...
}