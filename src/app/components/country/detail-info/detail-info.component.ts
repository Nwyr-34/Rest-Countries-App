import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, subscribeOn } from 'rxjs';
import { Country } from 'src/app/interfaces/country';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.css']
})
export class DetailInfoComponent {

  country$!: Observable<Country>; 
  constructor (private api: ApiService, private route: ActivatedRoute){  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.country$ = this.api.getCountryByName(params['country'])
    })
  }


}
