import { Component, OnInit } from '@angular/core';

import { Contact } from "../contact.model";
import { ContactService } from "../contact.service";
import {Params} from "@angular/router";
import {Document} from "../../documents/document.model";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactService: ContactService,
              ) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();

    this.contactService.contactChangedEvent
      .subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;
        }
      );
  }


}
