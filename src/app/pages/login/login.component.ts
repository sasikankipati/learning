import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TestsuiteService } from 'src/app/services/testsuite.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  loginForm: FormGroup;
  msg;

  constructor(private fb: FormBuilder, private router: Router,private testService: TestsuiteService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['/home']);
    }
  }

  successLogin() {
    localStorage.setItem(
      'access_token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    );
    location.reload();
  }

  onSubmit() {
    this.isLoading = false;
    //alert("Here ..");
    var body = {
      name: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    var responseTxt="";
    this.testService.loginAuthentication(body).subscribe(data => {
      if(data.response == "success"){
        this.successLogin();  
      }
    });

    console.log("###############");
    //console.log(this.testService.loginAuthentication1(body));

    console.log(responseTxt);
    //this.successLogin();

  }
}
