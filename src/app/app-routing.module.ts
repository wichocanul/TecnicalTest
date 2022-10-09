//Angular Modules
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Components
import { HomeComponent } from "./products/pages/home/home.component";
import { DocumentationComponent } from "./products/pages/documentation/documentation.component";
import { Error404Component } from "./products/pages/error404/error404.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: "full"
    },
    {
        path: 'doc',
        component: DocumentationComponent
    },
    {
        path: '**',
        component: Error404Component
    }
];


@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}