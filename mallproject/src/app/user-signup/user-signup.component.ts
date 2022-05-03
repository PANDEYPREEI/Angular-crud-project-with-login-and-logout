import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
public signupForm! :FormGroup
  constructor(private formBuilder :FormBuilder,private router:Router ,private http : HttpClient) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      email : [''],
      password: ['']
    })
  }
  signUp()
  {
this.http.post<any>("http://localhost:3000/profile" , this.signupForm.value)
.subscribe(
  res=>{
    alert("Signup Successful");
    this.signupForm.reset();
    this.router.navigate(['login']);
  },err=>
  {
    alert("Something went wrong")
  }
)
  }
}
