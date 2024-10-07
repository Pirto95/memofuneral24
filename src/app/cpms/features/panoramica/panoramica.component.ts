import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CapitalizeTextPipe } from '../../../core/pipes/capitalize-text.pipe';
import { TopBarComponent } from '../../shared/components/top-bar/top-bar.component';

@Component({
  selector: 'app-panoramica',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule,
    CapitalizeTextPipe,
    TopBarComponent,
    CommonModule
  ],
  templateUrl: './panoramica.component.html',
  styleUrl: './panoramica.component.scss'
})
export class PanoramicaComponent {

}
