import { Document } from "./document.model";
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";
import {Contact} from "../contacts/contact.model";
import {EventEmitter} from "@angular/core";


export class DocumentsService {
  documentSelected = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();

  private documents: Document[];

  constructor () {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[]{
    return this.documents.slice();
  }

  getDocument(documentId: string): Document {
    for (let document of this.documents){
      if (document.id === documentId){
        return document;
      }
    }
    return null;
  }

  deleteDocument(document: Document) {
    if (document === null) {
      return;
    }

    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }

    this.documents.splice(pos, 1);
    this.documentChangedEvent.emit(this.documents.slice());
  }
}
