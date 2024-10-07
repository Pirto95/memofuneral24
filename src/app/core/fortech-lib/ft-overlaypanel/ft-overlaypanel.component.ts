import { Component, ViewChild } from '@angular/core';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'ft-overlaypanel',
  standalone: true,
  imports: [OverlayPanelModule ],
  templateUrl: './ft-overlaypanel.component.html',
  styleUrl: './ft-overlaypanel.component.scss'
})
export class FtOverlaypanelComponent {
  @ViewChild('op', { static: false }) overlayPanel!: OverlayPanel;

  constructor(){

  }
  toggle(event : Event){
    this.overlayPanel.toggle(event);
  }
}
