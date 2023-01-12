import { EmpServService } from './../emp-serv.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {
  constructor(private serv : EmpServService , private router: Router){}

  ngOnInit(){
    this.getDatafromAPI()
  }
  EmployeeData:any

  getDatafromAPI(){
    this.serv.getapi().subscribe((data)=>{
      this.EmployeeData=data
      console.log(data)
    } )
  }
  delData(id:any){
    console.log(id)
    this.serv.delApi(id).subscribe(()=>{
      alert("Empolyee Data Deleted!");
      window.location.reload();
    });
  }

  edit(id:any){
    this.router.navigate(['/update',id])
  }
}
