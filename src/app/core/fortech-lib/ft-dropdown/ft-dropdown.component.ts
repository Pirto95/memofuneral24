import { Component, ModelSignal, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Dropdown } from '../models';
import { IconsManagementComponent } from '../ft-icons/icons-management.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ft-dropdown',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule,
    IconsManagementComponent,
    TranslateModule
  ],
  templateUrl: './ft-dropdown.component.html',
  styleUrl: './ft-dropdown.component.scss'
})
export class FtDropdownComponent {
  itemDropdown = input.required<Dropdown[]>()
  infoSelected:  ModelSignal<Dropdown | undefined> = model<Dropdown>();
}
