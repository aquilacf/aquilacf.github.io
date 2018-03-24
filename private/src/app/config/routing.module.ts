/**
 * Router - 24/Mar/2018
 * @author Áquila Freitas <aquilacf@protonmail.com>
 */

import { NgModule }              from "@angular/core";
import { RouterModule, Routes }  from "@angular/router";

import {HomeComponent} from "../home/home.component";

const routes: Routes = [
    {   path: '',
        component: HomeComponent    },
    {   path: ":page",
        component: HomeComponent    },
    {   path: "**",
        component: HomeComponent,
        data: {page:"not found"}   }];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {}
