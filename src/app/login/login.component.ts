import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Common } from '../shared/models/common.model';
import {MainService} from "../shared/services/main.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData : Common[] = [];
  submitEM: FormGroup;
  constructor(
    private router: Router,
    private mainService: MainService,
    private fb: FormBuilder
  ) {
    this.submitEM = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getLgoinData();
  }
  
  submit() {
    if (this.submitEM.valid) {
      this.userData.forEach((c: any) => {
        if(c.userId === this.submitEM.value.username && c.password === this.submitEM.value.password){
          this.router.navigate(['userModule']);
        }else{
          alert('Please Enter Correct Details');
        }
      });
      
    }
  }
 
  cancel(): void {
    this.router.navigate(['/home'])
  }
  getLgoinData(): void {
    this.mainService.login().subscribe((data: Common[])=>{
      this.userData = data;
    })
  }
}
