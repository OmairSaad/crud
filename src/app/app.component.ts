import { Component } from '@angular/core';
import { Student } from './student';
import { empty } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  add:boolean=true;
  title = 'crud';
  Data:any[] =[];
  save(a:any){
  this.Data.push(a.value);
  alert("done!")
  a.form.reset()
  }
  obj = new Student();

  del(i:number){
   this.Data.splice(i,1);
   alert("done!")
  }
  ind:number=0
  edit(i:any, u:any){
  console.log('i==>', i)
   this.obj =i
   this.ind=u;
   console.log(this.obj)
   this.add=false;
  }

  up(a:any){
  this.Data[this.ind]=a.value
  alert("done!")
  this.add=true;
  a.form.reset();
  }
}
