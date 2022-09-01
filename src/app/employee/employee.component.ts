import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'FirstName', 'LastName', 'Gender', 'ContactNumber', 'Email', 'State', 'City','Designation'];
  dataSource:any[]=[];
  Employee:any={};
  constructor(private apiservice:ApiService,employee:Employee) { }
  ngOnInit(){
this.apiservice.reademployees().subscribe((result:any)=>{
this.dataSource=result;
});
}
selectemployee(Employee: {}){
  this.Employee=Employee;
}
newemployee() {
  this.Employee = {};
}

createemployee(f:any) {
  this.apiservice.createemployees(f.value).subscribe((result) => {
    console.log(result);
  });

}

deleteemployee(id:any) {
  this.apiservice.deleteemployees(id).subscribe((result) => {
    console.log(result);
  });
}

updateemployee(f:any) {
  f.value.id = this.Employee['id'];
  this.apiservice.updateemployees(f.value).subscribe((result) => {
    console.log(result);
  });
}
}
