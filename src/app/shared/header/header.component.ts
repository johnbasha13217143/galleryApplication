import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  path:  any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.path = this.router.url;
  }

  getActiveClass( path: string): any {
    if(path === this.path){
      return 'active';
    }
    }
  home(): void {
    this.router.navigate(['home']);
  }

  about(): void {
    this.router.navigate(['About']);
  }

  login(): void {
    this.router.navigate(['Login'])
  }
}
