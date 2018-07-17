import {Component, OnInit} from '@angular/core';
import {Message} from "../message.model";
import {MessagesServices} from "../messages.service";
import {Document} from "../../documents/document.model";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessagesServices) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
    this.messageService.messageSelected.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    )
  }

  // onSelectedMessage(message: Message) {
  //   this.messageService.messageSelected.emit(message);
  // }

}
