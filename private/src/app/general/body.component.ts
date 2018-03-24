import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    template: "<router-outlet></router-outlet>"
})
export class BodyComponent implements OnInit {

    constructor() { }

    ngOnInit() {

        console.log("body");

    }

}
