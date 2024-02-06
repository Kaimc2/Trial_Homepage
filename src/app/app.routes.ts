import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";


const PathRoutes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: '', redirectTo: 'home', pathMatch:'full' },
]

@NgModule({
    imports: [
        RouterModule.forRoot(PathRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{ }


export const routes: Routes = [];
