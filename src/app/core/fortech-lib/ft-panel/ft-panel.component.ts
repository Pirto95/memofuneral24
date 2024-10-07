import { Component} from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { FtMenuComponent } from '../ft-menu/ft-menu.component';

@Component({
  selector: 'ft-panel',
  standalone: true,
  imports: [
    PanelModule,
    FtMenuComponent
  ],
  templateUrl: './ft-panel.component.html',
  styleUrl: './ft-panel.component.scss'
})
export class FtPanelComponent {

}
