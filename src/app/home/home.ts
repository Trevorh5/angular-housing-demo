import { Component, inject } from '@angular/core'

import { HousingLocation } from '../housing-location/housing-location'
import { HousingLocationInfo } from '../housing-location'
import { HousingService } from '../housing.service'
import { FilterBar } from '../filter-bar/filter-bar'

@Component({
  selector: 'app-home',
  imports: [HousingLocation, FilterBar],
  templateUrl: './home.html',
  styleUrl: './home.css',
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

  // Handlers
  onSearch = (filters: { name: string; state: string; city: string }): void => {
    if (!filters.name && !filters.state && !filters.city) {
      this.filteredLocationList = this.housingLocationList
      return
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) => {
        return (
          housingLocation?.name
            .toLowerCase()
            .includes(filters.name.toLowerCase()) &&
          housingLocation?.state
            .toLowerCase()
            .includes(filters.state.toLowerCase()) &&
          housingLocation?.city
            .toLowerCase()
            .includes(filters.city.toLowerCase())
        )
      }
    )
  }
}
