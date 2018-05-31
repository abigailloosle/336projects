export class Message {

  constructor(
    public messageId: string,
    public subject: string,
    public msgText: string,
    public sender: string
  ){
    this.messageId = messageId;
    this.subject = subject;
    this.msgText = msgText;
    this.sender = sender;
  }
}
