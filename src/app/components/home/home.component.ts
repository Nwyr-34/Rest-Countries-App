import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { Country, Currencies, Languages } from '../../interfaces/country';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  countries$!: Observable<Country[]>;

  constructor(private apiService: ApiService){}

  ngOnInit() :void{
    this.fillData()
  }

  fillData(){
    this.countries$ = this.apiService.getAllCountries();
  }

  
  


}