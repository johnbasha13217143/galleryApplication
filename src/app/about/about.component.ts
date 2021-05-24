import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MainService} from "../shared/services/main.service";
import {Common} from "../shared/models/common.model";

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

  constructor(
    private fb: FormBuilder,
    private mainService: MainService
  ) {
  }

  ngOnInit(): void {
  }
}
