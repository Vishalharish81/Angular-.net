import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{ detail} from'../Model/detail';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  readonly ApiUrl = "https://localhost:7039/api/Values"
 
  constructor(private http : HttpClient , https: HttpClientModule) { }
  GetMethod(): Observable<detail[]>{
    return this.http.get<detail[]>(this.ApiUrl);

  }
  crateMethod(emp:detail ): Observable<detail>{
    emp.id ="000000000"
    return this.http.post<detail>(this.ApiUrl,emp)
  }
}
