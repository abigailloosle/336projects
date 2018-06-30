import { Injectable, EventEmitter } from "@angular/core";
import { Contact } from "./contact.model";
import { MOCKCONTACTS } from "./MOCKCONTACTS";

@Injectable()
export class ContactService {
  contactSelected = new EventEmitter<Contact>();

  private contacts: Contact[];

  constructor () {
    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[]{
    return this.contacts.slice();
  }

  getContact(contactId: string): Contact {
    for (let contact of this.contacts){
      if (contact.id === contactId){
        return contact;
      }
    }
    return null;
  }
}
