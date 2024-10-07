import { Component, input, output } from '@angular/core';
import { IconsManagementComponent } from '../ft-icons/icons-management.component';
import { NavList } from '../models';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ft-nav-list',
  standalone: true,
  imports: [
    TranslateModule,
    IconsManagementComponent
  ],
  templateUrl: './ft-nav-list.component.html',
  styleUrl: './ft-nav-list.component.scss'
})
export class FtNavListComponent {
  items = input.required<NavList[]>()
  routeActive = input.required<string>()
  route = output<string>()

  //emette il valore some string della rotta selezionata
  routeSelected(route : string){
    this.route.emit(route)
  }
}
