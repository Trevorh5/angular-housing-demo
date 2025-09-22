import { Component, inject } from '@angular/core'
import { HousingLocation } from '../housing-location/housing-location'
import { HousingLocationInfo } from '../housing-location'
import { HousingService } from '../housing.service'

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
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
  styleUrls: ['./home.css'],
})
export class Home {
  // services
  housingService: HousingService = inject(HousingService)

  // data
  housingLocationList: HousingLocationInfo[] = []
  filteredLocationList: HousingLocationInfo[] = []

  constructor() {
    this.housingService.getAllHousingLocations().then((locations) => {
      this.housingLocationList = locations
      this.filteredLocationList = locations
    })
  }

  filterResults(text: string) {
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
