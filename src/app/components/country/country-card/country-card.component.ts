import { Component, Input } from '@angular/core';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent {
  @Input()
  country!: Country;

  getLanguageNames(): string[] {
    if (this.country && this.country.languages) {
      return Object.keys(this.country.languages).map(lang => this.country.languages[lang]);
    }
    return [];
  }
}
