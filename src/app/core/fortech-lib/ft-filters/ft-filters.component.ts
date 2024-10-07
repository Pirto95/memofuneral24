import { Component, computed, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { StoreService } from '../../../cpms/shared/services/store.service';
import { Filter, filtersPlaceholder } from '../models';
import { CheckboxModule } from 'primeng/checkbox';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ft-filters',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    FormsModule,
    CheckboxModule,
    TranslateModule,
    // CapitalizePipe,
    ButtonModule,
  ],
  templateUrl: './ft-filters.component.html',
  styleUrl: './ft-filters.component.scss'
})
export class FtFiltersComponent {

  options = input.required<Filter[]>()
  checked: string[] = [];

  clearFilters(){
    
  }

  // filter = signal("")


  // listFiltered = computed(()=> {
  //   return this.options().filter((el)=> {
  //     el.value === this.filter()
  //   })
  // })

  // changeFilters(){
  //   this.locationService.updateFilters(this.filters())
  // }

  // clearFilters(){
  //   this.filters.set(this.locationService.getFilters())
  //   this.locationService.updateFilters([])
  // }
}
