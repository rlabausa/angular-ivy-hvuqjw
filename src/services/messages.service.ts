import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from '../models/messages.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  getMessages(): Observable<Message[]> {
    return of([
      { id: 1, text: 'Hello, World!', sender: 'user1', datetime: new Date() },
      { id: 2, text: 'Angular is fun!', sender: 'user2', datetime: new Date() },
      { id: 3, text: 'I need coffee.', sender: 'user3', datetime: new Date() },
      {
        id: 4,
        text: 'I NEED coffee!!!!.',
        sender: 'user3',
        datetime: new Date(),
      },
    ]);
  }

  editMessages(id: number, text: string): Observable<any> {
    return of();
  }
}
