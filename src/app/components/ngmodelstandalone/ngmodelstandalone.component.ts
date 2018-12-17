import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodelstandalone',
  templateUrl: './ngmodelstandalone.component.html',
  styleUrls: ['./ngmodelstandalone.component.css']
})
export class NgModelStandaloneComponent {
  name = '';

  setValue() {
    this.name = 'Nancy';
  }
}
