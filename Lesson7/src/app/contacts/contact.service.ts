import { Injectable, EventEmitter } from "@angular/core";
import { Contact } from "./contact.model";
import { MOCKCONTACTS } from "./MOCKCONTACTS";
import { Subject } from "rxjs/internal/Subject";

@Injectable()
export class ContactService {
  contactSelected = new EventEmitter<Contact>();
  contactChangedEvent = new EventEmitter<Contact[]>();
  contactListChangedEvent = new Subject<Contact[]>();
  maxContactId: number;

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

  // deleteContact(contact: Contact) {
  //   if (contact === null) {
  //     return;
  //   }
  //
  //   const pos = this.contacts.indexOf(contact);
  //   if (pos < 0) {
  //     return;
  //   }
  //
  //   this.contacts.splice(pos, 1);
  //   this.contactChangedEvent.emit(this.contacts.slice());
  // }

  getMaxId(): number {
    let maxId = 0;

    for (let contact of this.contacts) {
      let contactId = parseInt('contact.id');

      if (contactId < maxId) {
        maxId = contactId;
      }
      return maxId;
    }
  }

  addContact(newContact: Contact) {
    if (!newContact) {
      return
    }

    this.maxContactId++;
    newContact.id = this.maxContactId.toString();
    this.contacts.push(newContact);
    var contactsListClose = this.contacts.slice();
    this.contactListChangedEvent.next(contactsListClose);
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (!originalContact || !newContact) {
      return;
    }

    var pos = this.contacts.indexOf(originalContact);
    if (pos < 0) {
      return;
    }

    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;
    var contactsListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactsListClone);
  }

  deleteContact(contact: Contact) {
    if (!contact) {
      return;
    }

    var pos = this.contacts.indexOf(contact);
    if (pos< 0) {
      return;
    }

    this.contacts = this.contacts.splice(pos, 1);
    var contactsListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactsListClone);
  }
}
