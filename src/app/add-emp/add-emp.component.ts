import { EmpServService } from './../emp-serv.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
  constructor(private serv: EmpServService){}

  addAPIForm = new FormGroup({
    id: new FormControl(),
    nm: new FormControl(),
    mobile: new FormControl(),
    addr: new FormControl(),
  });


  submitForm(){
    console.log(this.addAPIForm.value)
    this.serv.addApi(this.addAPIForm.value).subscribe((mdata)=>{
      alert("Employee Data added Successfully!")
    })
  }

}
