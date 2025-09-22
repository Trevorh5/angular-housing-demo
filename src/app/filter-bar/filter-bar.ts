import { Component, EventEmitter, Output } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-filter-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css',
})
export class FilterBar {
  // form
  filterForm = new FormGroup({
    name: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
  })

  // events
  @Output() search = new EventEmitter<{
    name: string
    state: string
    city: string
  }>()

  // handlers
  onSubmit = () => {
    const values = this.filterForm.value
    this.search.emit({
      name: values.name ?? '',
      state: values.state ?? '',
      city: values.city ?? '',
    })
  }
}
