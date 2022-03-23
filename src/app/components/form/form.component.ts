import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() selectedParameters: any = new EventEmitter();

  selectedCategory: string = 'general';
  selectedCountry: string = 'us';

  categories: any[] = [
    { value: 'general', name: 'General' },
    { value: 'business', name: 'Business' },
    { value: 'entertainment', name: 'Entertainment' },
    { value: 'health', name: 'Health' },
    { value: 'science', name: 'Science' },
    { value: 'sports', name: 'Sports' },
    { value: 'technology', name: 'Technology' },
  ]

  countries: any[] = [
    { value: 'us', name: 'United States' },
    { value: 'ru', name: 'Russia' },
    { value: 'mx', name: 'Mexico' },
    { value: 'ar', name: 'Argentina' },
    { value: 'br', name: 'Brazil' },
    { value: 'fr', name: 'France' },
  ]

  constructor() { }

  searchNews() {
    const values: Object = {
      category: this.selectedCategory,
      country: this.selectedCountry
    }
    this.selectedParameters.emit(values)
  }

}
