import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { AutoCompleteSuggestions, Dropdown, InfoMenu, ListBox, SettingProfile, UserMenu } from '../../../../core/fortech-lib/models';
import { FtDropdownComponent } from '../../../../core/fortech-lib/ft-dropdown/ft-dropdown.component';
import { FtAutocompleteComponent } from '../../../../core/fortech-lib/ft-autocomplete/ft-autocomplete.component';
import { FtChipComponent } from '../../../../core/fortech-lib/ft-chip/ft-chip.component';
import { TranslateModule } from '@ngx-translate/core';
import { FtMenuComponent } from '../../../../core/fortech-lib/ft-menu/ft-menu.component';
import { FtListboxComponent } from '../../../../core/fortech-lib/ft-listbox/ft-listbox.component';
import { StoreService } from '../../services/store.service';
import { IconsManagementComponent } from '../../../../core/fortech-lib/ft-icons/icons-management.component';
import { FtOverlaypanelComponent } from '../../../../core/fortech-lib/ft-overlaypanel/ft-overlaypanel.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../../auth.service';



@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
  CommonModule,
    RouterModule,
    ButtonModule,

  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
authService = inject(AuthService)

  constructor() {
    
  }
}
