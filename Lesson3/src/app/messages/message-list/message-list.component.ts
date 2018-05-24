import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../message.model";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [
    new Message('1', 'CIT366', 'bla', 'Abby'),
    new Message('2', 'homework','help', 'Abby')
  ];


  constructor() { }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}
