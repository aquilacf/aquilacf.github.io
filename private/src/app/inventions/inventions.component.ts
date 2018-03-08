import { Component, OnInit } from '@angular/core';
import {Invention} from "./Models/Invention";


@Component({
  selector: 'app-inventions',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css']
})
export class InventionsComponent implements OnInit {

  invention: Invention = {
    name:"aquileus"
  }

  constructor() { }

  ngOnInit() {
  }

}
