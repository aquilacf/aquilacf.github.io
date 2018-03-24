/**
 * Home component - 24/Mar/2018
 * @author Áquila Freitas <aquilacf@protonmail.com>
 */

/**
 * Imports
 */
import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from "@angular/router";

@Component({
  templateUrl: './Views/home.html',
  styleUrls: ['./Views/home.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
