import { Component, inject } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { HousingLocation } from '../housing-location/housing-location'
import { HousingLocationInfo } from '../housing-location'
import { HousingService } from '../housing.service'

@Component({
  selector: 'app-home',
  imports: [HousingLocation, ReactiveFormsModule],
  template: `
    <section>
      <form [formGroup]="searchForm" (submit)="filterResults()">
        <input
          type="text"
          placeholder="Filter by city"
          formControlName="state"
        />
        <button class="primary" type="submit">Search</button>
      </form>
    </section>
    <section class="results">
      @for(housingLocation of filteredLocationList; track $index) {
      <app-housing-location
        [housingLocation]="housingLocation"
      ></app-housing-location>
      }
    </section>
  `,
  styleUrl: './home.css',
})
export class Home {
  // services
  housingService: HousingService = inject(HousingService)

  // form
  searchForm = new FormGroup({
    state: new FormControl(''),
  })

  // data
  housingLocationList: HousingLocationInfo[] = []
  filteredLocationList: HousingLocationInfo[] = []

  constructor() {
    this.housingService.getAllHousingLocations().then((locations) => {
      this.housingLocationList = locations
      this.filteredLocationList = locations
    })
  }

  filterResults() {
    const text = this.searchForm.value.state
    if (!text) {
      this.filteredLocationList = this.housingLocationList
      return
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }
}
