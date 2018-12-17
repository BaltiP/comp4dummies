import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StandardexamplesComponent } from './components/standardexamples/standardexamples.component';
import { NgModelStandaloneComponent } from './components/ngmodelstandalone/ngmodelstandalone.component';
import { Custom2wayDataBindingComponent } from './components/custom2way-data-binding/custom2way-data-binding.component';
import { NgmodelwithformComponent } from './components/ngmodelwithform/ngmodelwithform.component';

import { MatButtonModule, MatCheckboxModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TantaloscounterComponent } from './components/tantaloscounter/tantaloscounter.component';

@NgModule({
  declarations: [
    AppComponent,
    StandardexamplesComponent,
    StandardexamplesComponent,
    NgModelStandaloneComponent,
    Custom2wayDataBindingComponent,
    NgmodelwithformComponent,
    TantaloscounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
