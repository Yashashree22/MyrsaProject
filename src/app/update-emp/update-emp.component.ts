import { EmpServService } from './../emp-serv.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent {
  constructor(private serv: EmpServService, private actv : ActivatedRoute){}

Dataid:any
ngOnInit(){
  this.actv.params.subscribe((Emp_id)=>{
    this.Dataid = Emp_id['id']
    console.log(Emp_id)
  })
}

updateAPIForm = new FormGroup({
    nm: new FormControl(),
    mobile: new FormControl(),
    addr: new FormControl(),
  });


  submitForm(){
    console.log(this.updateAPIForm.value,this.Dataid)
    this.serv.updateApi(this.updateAPIForm.value,this.Dataid).subscribe((mdata)=>{
      alert("Employee Data added Successfully!")
    })
  }

}
