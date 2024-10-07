import { Component, ModelSignal, computed, inject, input, model, output, } from '@angular/core';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AutoCompleteSuggestions } from '../models';
import { DividerModule } from 'primeng/divider';
import { IconsManagementComponent } from '../ft-icons/icons-management.component';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';


@Component({
  selector: 'ft-autocomplete',
  standalone: true,
  imports:
    [
      DividerModule,
      FormsModule,
      TranslateModule,
      AutoCompleteModule,
      IconsManagementComponent,
      InputIconModule,
      IconFieldModule,
    ],
  templateUrl: './ft-autocomplete.component.html',
  styleUrl: './ft-autocomplete.component.scss'
})
export class FtAutocompleteComponent {

  placeholder = input<string | undefined>();
  suggestionsList = input.required<AutoCompleteSuggestions[]>()
  filter = output<AutoCompleteCompleteEvent>()
  inputSelected: ModelSignal<string | undefined> = model<string>();

  //Mando l'evento al padre che si occupera di gestire il filtro
  filterSearch(event : AutoCompleteCompleteEvent){
    this.filter.emit(event);
  }
}

