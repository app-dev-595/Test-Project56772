import { Injectable } from '@nestjs/common';
import { Event } from './event.model';

@Injectable()
export class EventService {
  private readonly events: Event[] = [];

  create(event: Event): Event {
    this.events.push(event);
    return event;
  }

  update(id: string, event: Event): Event {
    const index = this.events.findIndex((evt) => evt.id === id);
    if (index !== -1) {
      this.events[index] = { ...event, id };
      return this.events[index];
    }
    return null;
  }

  findById(id: string): Event {
    return this.events.find((evt) => evt.id === id);
  }

  delete(id: string): boolean {
    const index = this.events.findIndex((evt) => evt.id === id);
    if (index !== -1) {
      this.events.splice(index, 1);