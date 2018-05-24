import { Component, EventEmitter, Output } from '@angular/core';

import { Contact } from "../contacts/contact.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  @Output() selectedFeatureEvent = new EventEmitter<string>();

  onSelected(selectedEvent: string){
    this.selectedFeatureEvent.emit(selectedEvent);
  }
}
