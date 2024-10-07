import { Component, computed, inject, input, model, ModelSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Card } from '../models';
import { StoreService } from '../../../cpms/shared/services/store.service';
import { IconsManagementComponent } from '../ft-icons/icons-management.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ft-card',
  standalone: true,
  imports: [
    TranslateModule,
    CardModule,
    FormsModule,
    IconsManagementComponent
  ],
  templateUrl: './ft-card.component.html',
  styleUrl: './ft-card.component.scss'
})
export class FtCardComponent {
  LocationService = inject(StoreService);

  cardItems = input.required<Card>()

  infoCardSelected:  ModelSignal<Card | undefined> = model<Card>();
}
