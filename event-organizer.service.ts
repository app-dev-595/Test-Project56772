import { Injectable } from '@nestjs/common';
import { EventOrganizer } from './event-organizer.model';

@Injectable()
export class EventOrganizerService {
  private readonly eventOrganizers: EventOrganizer[] = [];

  create(eventOrganizer: EventOrganizer): EventOrganizer {
    this.eventOrganizers.push(eventOrganizer);
    return eventOrganizer;
  }

  update(id: string, eventOrganizer: EventOrganizer): EventOrganizer {
    const index = this.eventOrganizers.findIndex(
      (organizer) => organizer.id === id,
    );
    if (index !== -1) {
      this.eventOrganizers[index] = { ...eventOrganizer, id };
      return this.eventOrganizers[index];
    }
    return null;
  }

  findById(id: string): EventOrganizer {
    return this.eventOrganizers.find((organizer) => organizer.id === id);
  }

  delete(id: string): boolean {
    const index = this.eventOrganizers.findIndex(
      (organizer) => organizer.id === id,
    );
    if (index !== -1) {
      this.eventOrganizers.splice(index, 1);
      return true;
    }
    return false;
  }
}