import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDetails:FormGroup;
  constructor(private router:Router,private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.loginDetails = this.fb.group({
      email: '',
      password:''
    })

  }

  isUserValid() {
   let user =  this.loginDetails.value;
   let arr = this.apiService.isValidUser(user)
   if(arr.length> 0) {
     if(arr[0].isAudit) {
     this.router.navigate(['/audit']);
     } else {
     this.router.navigate(['/dashboard']);
     }
   }
   
  }
}
