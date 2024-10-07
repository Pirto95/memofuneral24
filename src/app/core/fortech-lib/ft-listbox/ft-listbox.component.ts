import {
  Component,
  ModelSignal,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  signal,
  untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxClickEvent, ListboxModule } from 'primeng/listbox';
import { ListBox, SelectItem, SelectedElementList } from '../models';
import { SelectItemGroup } from 'primeng/api';
import { TranslateModule } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'ft-listbox',
  standalone: true,
  imports: [ListboxModule, FormsModule, TranslateModule, DividerModule],
  templateUrl: './ft-listbox.component.html',
  styleUrl: './ft-listbox.component.scss',
})
export class FtListboxComponent {
  sanitizer = inject(DomSanitizer)

  options = input<SelectItemGroup[] | ListBox[]>([]);
  isGroup = input<boolean>(false);
  selectedItem = signal<SelectedElementList | null>(null);
  elementSelected = output<SelectItem>();

  //gestisce l'elemento selezionato e fa un emit del suo valore
  selectElement(event: ListboxClickEvent) {
    if (event.option && !event.option.disabled) {
      this.elementSelected.emit(event.option);
    }
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
