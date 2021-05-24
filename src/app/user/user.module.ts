import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { routes } from '../user/user.router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../meterial.module';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule
  ]
})
export class UserModule {
 }
