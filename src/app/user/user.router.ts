import {Route, Routes} from "@angular/router";
import { HomeComponent } from "../user/home/home.component";
import { AboutComponent } from "../user/about/about.component";
import { GalleryComponent } from "../user/gallery/gallery.component";

export const routes: Routes = [
    {path:'', redirectTo:'userHome', pathMatch:'full'},
    {path:'userHome', component: HomeComponent},
    {path:'userAbout', component: AboutComponent},
    {path:'gallery', component: GalleryComponent},
]
