import { Component, OnInit } from '@angular/core';
import { Message } from '../models/messages.model';
import { MessageService } from '../services/messages.service';

@Component({
  selector: 'app-message',
  styleUrls: ['./message.component.css'],
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  messages: any[];
  constructor(private messagesSvc: MessageService) {}

  ngOnInit() {
    this.messagesSvc.getMessages().subscribe((messages: Message[]) => {
      this.messages = messages;
    });
  }
}
