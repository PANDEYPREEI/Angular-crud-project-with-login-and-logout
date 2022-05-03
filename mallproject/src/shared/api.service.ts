import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient} from  '@angular/common/http'
@Injectable({

  providedIn: 'root'
})
export class ApiService {
  employeeData! : any;

  constructor(private http : HttpClient) { }//inject http client in constructor
//create 4 api
postEmployee(data : any)
{
  return this.http.post<any>("http://localhost:3000/posts",data)
  .pipe(map((res : any) =>{
    return res;
  }))//use pipe operator and map when this call is made and use iy
}
getEmployee()
{
  return this.http.get<any>("http://localhost:3000/posts")
  .pipe(map((res : any) =>{
    return res;
  }))//use pipe operator and map when this call is made and use iy
}
updateEmployee(data : any , id : number)
{
  return this.http.put<any>("http://localhost:3000/posts/" + id , data)
  .pipe(map((res : any) =>{
    return res;
  }))//use pipe operator and map when this call is made and use iy
}


deleteEmployee( id : number)
{console.log(id);
  return this.http.delete<any>("http://localhost:3000/posts/" + id)
  .pipe(map((res : any) =>{
    return res;
  }))//use pipe operator and map when this call is made and use iy
}
}

