import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employeemodel } from './user-dashboard.model';
import { ApiService } from 'src/shared/api.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  formvalue!: FormGroup;
 showAdd=true;
  showupdate= false;
  employeeModelObj: Employeemodel = new Employeemodel();
  //lets create object in component.ts file so that we can pass
  //this  object to server for posting out data
  constructor(private formbuilder: FormBuilder, private api: ApiService) {}
  employeeData!: any;
  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      //1] take this formvalue
      firstname: [''],
      lastname: [''],
      email: [''],
      mobile: [''],
      salary: [''],
    });
    this.getAllEmployee(); //runs when service api call
  }
  display = 'none';
  formgroup = '';
  
  //employee model object to post our data
  //employee model object to post our data
  postEmployeeDetails() {
    this.showAdd=true;
    this.showupdate=false;
    this.employeeModelObj.firstname = this.formvalue.value.firstname; //acces above form value and store into model
    this.employeeModelObj.lastname = this.formvalue.value.lastname;
    this.employeeModelObj.email = this.formvalue.value.email;
    this.employeeModelObj.mobile = this.formvalue.value.mobile;
    this.employeeModelObj.salary = this.formvalue.value.salary;

    //post data and subscribe
    this.api.postEmployee(this.employeeModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Employee Added SuccessFully');
        let ref = document.getElementById('cancel');
        ref?.click();
       
      },
      (err) => {
        alert('Something went');
      }
    );
  }
  getAllEmployee() {
    this.api.getEmployee().subscribe((res) => {
      this.employeeData = res;
    });
  }
  ondelete(row: any) {
    this.api.deleteEmployee(row.id).subscribe((res) => {
      alert('Employee Deleted');
      this.getAllEmployee();
      //after deleting fetch Latest Record
    });
  }
// clickAddEmployee(){
//   this.showAdd=true;
//   this.showupdate=false;
//   this.formvalue.reset();
// }
  onEdit(row: any) {
    this.showAdd=false;
    this.showupdate=true;
    this.openModal();
    this.employeeModelObj.id = row.id;
    this.formvalue.controls['firstname'].setValue(row.firstname);
    this.formvalue.controls['lastname'].setValue(row.lastname);
    this.formvalue.controls['email'].setValue(row.email);
    this.formvalue.controls['mobile'].setValue(row.mobile);
    this.formvalue.controls['salary'].setValue(row.salary);
    this.getAllEmployee();
   
  }
  updateEmployeeDetails() {
   
    this.employeeModelObj.firstname = this.formvalue.value.firstname; //acces above form value and store into model
    this.employeeModelObj.lastname = this.formvalue.value.lastname;
    this.employeeModelObj.email = this.formvalue.value.email;
    this.employeeModelObj.mobile = this.formvalue.value.mobile;
    this.employeeModelObj.salary = this.formvalue.value.salary;

    this.api
      .updateEmployee(this.employeeModelObj, this.employeeModelObj.id)
      .subscribe((res) => {
        alert('Updated Record Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getAllEmployee();
      });
  }
  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
}
