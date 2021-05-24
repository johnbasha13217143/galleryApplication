import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  yearsOld = 19;  
  Releases = 101;
  Downloads = '2.8M';
  ForumMessages = '282K';
  Extensions = 599;

  constructor() { }

  ngOnInit(): void {
  }

}
