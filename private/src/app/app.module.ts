/**
 * Imports
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { InventionsComponent } from './inventions/inventions.component';


@NgModule({
  declarations: [
    InventionsComponent
  ],
  imports: [
      BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [InventionsComponent]
})
export class AppModule { }
