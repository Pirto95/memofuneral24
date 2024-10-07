import { Component, computed, inject } from '@angular/core';
import { FtCardComponent } from "../../../core/fortech-lib/ft-card/ft-card.component";
import { FtTableComponent } from "../../../core/fortech-lib/ft-table/ft-table.component";
import { StoreService } from '../../shared/services/store.service';
import { FtFiltersComponent } from '../../../core/fortech-lib/ft-filters/ft-filters.component';
import { Card, Filter, filtersPlaceholder, TableData } from '../../../core/fortech-lib/models';
import { DividerModule } from 'primeng/divider';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [
    TranslateModule,
    FtCardComponent,
    FtTableComponent,
    FtFiltersComponent,
    DividerModule
  ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {
  locationService = inject(StoreService);


  constructor(){
    this.locationService.getLocationsData()
  }

  cardData = computed<Card[]>(() => {
    return this.locationService.itemsCard
  })

  tableData = computed<TableData>(() => {
    return this.locationService.itemsTable
  })

  filterData = computed<Filter[]>(() => {
   return this.locationService.itemsFilter
  })
}
