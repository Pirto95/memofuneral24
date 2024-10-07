import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { TableData } from '../models';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ft-table',
  standalone: true,
  imports: [
    ButtonModule,
    TableModule,
    CheckboxModule,
    FormsModule,
  ],
  templateUrl: './ft-table.component.html',
  styleUrl: './ft-table.component.scss'
})
export class FtTableComponent {
  placeholder = input<string >();
  tableData = input.required<TableData>()
  selectedTable = model<any[]>()

  // PER SETTARE IL COLORE

// statuses!: any[];

// this.statuses = [
//   { label: 'Unqualified', value: 'unqualified' },
//   { label: 'Qualified', value: 'qualified' },
//   { label: 'New', value: 'new' },
//   { label: 'Negotiation', value: 'negotiation' },
//   { label: 'Renewal', value: 'renewal' },
//   { label: 'Proposal', value: 'proposal' }
// ];

// getSeverity(status: string) {
//   switch (status) {
//       case 'unqualified':
//           return 'danger';

//       case 'qualified':
//           return 'success';

//       case 'new':
//           return 'info';

//       case 'negotiation':
//           return 'warning';

//       case 'renewal':
//           return null;
//   }
}
