import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserheaderComponent } from './userheader/userheader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserheaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UserheaderComponent
  ]
})
export class SharedModule { }
