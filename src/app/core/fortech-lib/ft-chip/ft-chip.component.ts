import { Component, input } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { SettingProfile } from '../models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ft-chip',
  standalone: true,
  imports: [
    FormsModule,
    ChipModule
  ],
  templateUrl: './ft-chip.component.html',
  styleUrl: './ft-chip.component.scss'
})
export class FtChipComponent {

  dataProfile = input.required<SettingProfile>();
  
}
