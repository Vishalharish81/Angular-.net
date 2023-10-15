import { Component ,OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { DetailsService } from "../app/service/details.service";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  value :any =[];
  public pediatric_strabismus_evaluation: FormGroup;
   
  readonly ApiUrl = "https://localhost:7039/api/Values"
 constructor( private http : HttpClient , private Datservice : DetailsService,private _formBuilder: FormBuilder){
// debugger
//   this.http.get(this.ApiUrl).subscribe(x =>{
//     this.value= x
//     console.log(this.value)

 //})

 }
 Value(){
  debugger
  this.Datservice.crateMethod(this.pediatric_strabismus_evaluation.value).subscribe(X =>{
    
  })
  console.log(this.pediatric_strabismus_evaluation.value)
  
 }
  ngOnInit(): void {
    this.pediatric_strabismus_evaluation =this._formBuilder.group({
      id: [""],
      first_name: [""],
      Last_nam: [""],
      City: [""],
      Address:[""],
      
  }),
  console.log(this.pediatric_strabismus_evaluation)
   this.Datservice.GetMethod().subscribe( x=>{
    this.value =x
   
   })
  }
//  ngOnInit(){

 
//  }
 
}
