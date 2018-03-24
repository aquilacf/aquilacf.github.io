/**
 * App main module - 24/Mar/2018
 * @author Áquila Freitas <aquilacf@protonmail.com>
 */

/**
 * Imports
 */
import { NgModule }         from "@angular/core";
import { BrowserModule }    from "@angular/platform-browser";

import {RoutingModule}      from "./config/routing.module";
import {HomeModule}         from "./home/home.module";

/**
 * Components
 */
import { BodyComponent }    from "./general/body.component";

@NgModule({
  declarations: [
      BodyComponent
  ],
  imports: [
      BrowserModule,
      HomeModule,
      RoutingModule,
  ],
  providers: [],
  bootstrap: [BodyComponent]
})
export class AppModule { }
