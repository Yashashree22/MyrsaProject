import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServService {


  constructor(private http: HttpClient) { }

  getapi(){
    return this.http.get('http://localhost:3000/getEmployee')
  }

  addApi(formData:any){
    return this.http.post('http://localhost:3000/addEmployee',formData)
  }

  delApi(id:any){
    return this.http.delete(`http://localhost:3000/delEmployee/${id}`)
  }

  updateApi(formData:any,id:any){
    return this.http.put(`http://localhost:3000/updateEmployee/${id}`,formData)
  }

}
