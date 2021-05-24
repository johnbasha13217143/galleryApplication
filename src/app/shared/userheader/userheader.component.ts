import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.scss']
})
export class UserheaderComponent implements OnInit {

  path : any;
  constructor(
    private router: Router
  ) { 
  }
  ngOnInit(): void {
    this.path = this.router.url;
  }
  getActiveClass( path: string): any {
    if(path === this.path){
      return 'active';
    }
    }
  logout(): void {
    this.router.navigate(['/home']);
  }
  home(): void {
    this.router.navigate(['/userModule/userHome']);
  }
  about(): void {
    this.router.navigate(['/userModule/userAbout']);
  }
  gallery(): void {
    this.router.navigate(['/userModule/gallery'])
  }

}
