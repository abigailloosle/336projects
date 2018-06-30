import { Document } from "./document.model";
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";
import {Contact} from "../contacts/contact.model";
import {EventEmitter} from "@angular/core";


export class DocumentsService {
  documentSelected = new EventEmitter<Document>();

  private documents: Document[];

  constructor () {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[]{
    return this.documents.slice();
  }

  getContact(documentId: string): Document {
    for (let document of this.documents){
      if (document.documentId === documentId){
        return document;
      }
    }
    return null;
  }
}
