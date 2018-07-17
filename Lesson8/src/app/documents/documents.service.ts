import {Document} from "./document.model";
import {EventEmitter} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Subject} from "rxjs/internal/Subject";


export class DocumentsService {
  documentSelected = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();
  documentListChangedEvent = new Subject<Document[]>();
  maxDocumentId: number;

  documents: Document[] = [];

  constructor(public http: HttpClient) {
  }

  getDocuments(): Document[] {
    // return this.documents.slice();

    this.http.get('https://angular-class-e58a9.firebaseio.com/').subscribe(
      (documents: Document[]) => {
        this.documents = documents;
        this.maxDocumentId = this.getMaxId();
        this.documents.sort(
          (a, b) => {
            const docA = a.name.toUpperCase();
            const docB = b.name.toUpperCase();
            if (docA < docB) {
              return -1;
            } else if (docA > docB) {
              return 1;
            } else {
              return 0;
            }
          });

        this.documentListChangedEvent.next(this.documents.slice())
      },

      (error: any) => {
        console.log(error);
      }
    );
    return this.documents.slice();
  }

  getDocument(documentId: string): Document {
    for (let document of this.documents) {
      if (document.id === documentId) {
        return document;
      }
    }
    return null;
  }

  // deleteDocument(document: Document) {
  //   if (document === null) {
  //     return;
  //   }
  //
  //   const pos = this.documents.indexOf(document);
  //   if (pos < 0) {
  //     return;
  //   }
  //
  //   this.documents.splice(pos, 1);
  //   this.documentChangedEvent.emit(this.documents.slice());
  // }

  getMaxId(): number {
    let maxId = 0;

    for (let document of this.documents) {
      let documentId = parseInt('document.id');

      if (documentId < maxId) {
        maxId = documentId;
      }
      return maxId;
    }
  }

  addDocument(newDocument: Document) {
    if (!newDocument) {
      return
    }

    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);
    var documentsListClose = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClose);
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument) {
      return;
    }

    var pos = this.documents.indexOf(originalDocument);
    if (pos < 0) {
      return;
    }

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    var documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }

  deleteDocument(document: Document) {
    if (!document) {
      return;
    }

    var pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }

    this.documents = this.documents.splice(pos, 1);
    var documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }
}
