import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      password: ['',[Validators.required]],
      confirmPswd: ['', [Validators.required]],
      isAudit: [false]
    })
  }
  submitForm() {
    console.log('24::::::', this.registrationForm.value);
    if(this.registrationForm.valid) {
      this.apiService.updateUsers(this.registrationForm.value);
      alert('user added successfully');
     this.router.navigate(['/login']);
    }
  }
}
