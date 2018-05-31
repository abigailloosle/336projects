import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Document } from "../document.model";
import {Contact} from "../../contacts/contact.model";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document('1',
      'CIT 260 - Object Oriented Programming',
      'Create a game using Java',
      'https://content.byui.edu/file/b7c3e5ed6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf'),
    new Document('2',
      'CIT 366 - Full Web Stack Development',
      'Learn how to develop modern web application using the MEAN stack',
      'google.com'),
    new Document('3',
      'CIT 425 - Data Warehousing',
      'Warehouse that data',
      'facebook.com'),
    new Document('4',
      'CIT 460 - Enterprise Development',
      'Develop that enterprise',
      'twitter.com'),
    new Document('5',
      'CIT 495 - Senior Practicum',
      'Make something pretty before you leave here',
      'youtube.com'),

  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

}
