import { Component, EventEmitter, Output, input, output, signal } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { InfoMenu, UserMenu } from '../models';
import { DividerModule } from 'primeng/divider';
import { IconsManagementComponent } from '../ft-icons/icons-management.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ft-menu',
  standalone: true,
  imports: [
    TranslateModule,
    DividerModule,
    MenuModule,
    FormsModule,
    IconsManagementComponent
  ],
  templateUrl: './ft-menu.component.html',
  styleUrl: './ft-menu.component.scss'
})
export class FtMenuComponent {
  dataSettingProfile = input<UserMenu>();
  dataMenu = input<InfoMenu[]>();

  close = output<Event>()
   //Mando l'evento al padre che si occupera di gestire il filtro
    closeMenu(event : Event){
    this.close.emit(event);
  }
}
