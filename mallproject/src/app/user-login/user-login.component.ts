import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  display = "none";


  constructor(private authService :AuthServiceService,private formbuilder : FormBuilder,private router : Router ,private http :HttpClient) { }
//rsest login status

  ngOnInit(): void {}
    // this.loginform = this.formbuilder.group({
    //   email :['',Validators.required],
    //   password : ['',Validators.required]
    // })
    //pass input parameter of ngForm
  
//   }
//   login(login:loginform){
// this.http.get<any>("http://localhost:3000/profile")
// .subscribe(res=>{res.email === this.loginform.value.email && res.password === this.loginform.value.password ;
//   if(res){
//     alert("Login Successful");
//     this.loginform.reset();
//     this.router.navigate(["dash"]);
//   }
//   else{
//     alert("User Not Found");
//   }
// });
  
openModal() {
  this.display = "block";
}
onCloseHandled() {
  this.display = "none";
}

onlogin(loginForm : NgForm){


  if (loginForm.value.email==="preeti" && loginForm.value.password==="Preeti12" )
  {
    alert("Login Successful");
  
         this.router.navigate(["dash"]);
  }
  else{
    alert("User Not Found");
  }
}

}
