import {EventEmitter} from "@angular/core";
import { Message } from "./message.model";
import { MOCKMESSAGES } from "./MOCKMESSAGES";

export class MessagesServices {
  messageSelected = new EventEmitter<Message[]>();

  private messages: Message[];

  constructor () {
    this.messages = MOCKMESSAGES;
  }

  getMessages(): Message[]{
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    for (let message of this.messages){
      if (message.id === id){
        return message;
      }
    }
    return null;
  }

  addMessage(message: Message){
    this.messages.push(message);
    this.messageSelected.emit(this.messages.slice());
  }
}
