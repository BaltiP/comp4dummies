import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standardexamples',
  templateUrl: './standardexamples.component.html',
  styleUrls: ['./standardexamples.component.css']
})
export class StandardexamplesComponent {
  name = '';
  count = 0;
  eventLog = '';
  defCount = 0;

  increment() {
    this.count++;
    console.log('Event durch Klick ausgelöst!');
  }

  logEventParam(event) {
    console.log(event);
  }
}
