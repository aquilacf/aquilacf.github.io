import { Component, OnInit } from '@angular/core';
import {Invention} from "./Models/Invention";


@Component({
  selector: 'app-root',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css']
})
export class InventionsComponent implements OnInit {

  inventions: Invention[];

  nameModel : String;
  inventorModel : String;
  yearModel : String;



  constructor() {

    this.nameModel = '';
    this.inventorModel = '';
    this.yearModel = '';

    let inventionDefault : Invention = {

      name: "this app",
      year: "2018",
      inventor: "aquila freitas"

    };

    this.inventions = [inventionDefault];

  }

  ngOnInit() {}

  createInvention() {

      let newInvention : Invention = {
          name: this.nameModel ,
          inventor : this.inventorModel ,
          year : this.yearModel
      };


      // push the newly created Invention object to inventions array
      this.inventions.push( newInvention );

      // set the model values to '' again
      this.nameModel = this.yearModel = this.inventorModel = '';

  }

}
