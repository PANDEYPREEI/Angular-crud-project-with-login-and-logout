import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
usera!:[];
  constructor(private http :HttpClient) { }
  authUser(user:any){
  
  }
  //   this.http.get<any>("http://localhost:3000/profile")
  //   .subscribe(res=> { 
  //     const user= res.find((a:any)=>{
  //    return a.email === user.email && a.password === user.password)
  //     }
  // })


}