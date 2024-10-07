
import { Injectable, computed, inject, signal } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { GenericapiService } from './generic-api.service';
import { AutoCompleteSuggestions,  Card, Dropdown, Filter, filtersPlaceholder, InfoMenu, ListBox, NavBarData, NavList, SettingProfile, TableData, UserMenu } from '../../../core/fortech-lib/models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
 // Questo service gestisce i dati generali del progetto CPMS
 private genericApi = inject(GenericapiService);

 // Elenco delle Card all'interno di locations
 private _itemsCard = signal<Card[]>([]);
 get itemsCard() {
   return this._itemsCard();
 }
 private _setItemsCard(data: Card[]) {
   this._itemsCard.set(data);
 }

 // Elenco dei Filtri all'interno di locations
 private _itemsFilter = signal<Filter[]>([]);
 get itemsFilter() {
   return this._itemsFilter();
 }
 private _setItemsFilter(data: Filter[]) {
   this._itemsFilter.set(data);
 }

 // Dati della Tabella all'interno di locations
 private _itemsTable = signal<TableData>({
   columns: [],
   rows: []
 });
 get itemsTable() {
   return this._itemsTable();
 }
 private _setItemsTable(data: TableData) {
   this._itemsTable.set(data);
 }

 // Dati NavBar
 private _navbarData = signal<NavBarData>({menu:[], submenu:[]});
 get navbarData() {
   return this._navbarData();
 }
 private _setNavbarData(data: NavBarData) {
   this._navbarData.set(data);
 }
 
 // Dati dell'utente
 private _settingProfile = signal<UserMenu>({
   name: '',
   surname: '',
   profile: {
     photoProfile: '',
     label: ''
   },
   info: {
     label: '',
     location: ''
   }
 });
 get settingProfile() {
   return this._settingProfile();
 }
 private _setSettingProfile(data: UserMenu) {
   this._settingProfile.set(data);
 }

 // Elenco delle azioni del menù utente
 private _settingMenu = signal<InfoMenu[]>([
   {
     label: "ft-menu.area",
     info: ""
   },
   {
     label: "ft-menu.impostazioni",
     info: ""
   },
   {
     label: "ft-menu.esci",
     info: "",
     type: "logout"
   }
 ]);
 get settingMenu() {
   return this._settingMenu();
 }

 // Dati dropdown di eMSP
 private _optionsDropdown = signal<Dropdown[]>([]);
 get optionsDropdown() {
   return this._optionsDropdown();
 }
 private _setOptionsDropdown(data: Dropdown[]) {
   this._optionsDropdown.set(data);
 }

 // Opzioni delle notifiche cliccando sulla campanellina
 private _itemsListBox = signal<ListBox[]>([]);
 get itemsListBox() {
   return this._itemsListBox();
 }
 private _setItemsListBox(data: ListBox[]) {
   this._itemsListBox.set(data);
 }

 // Opzioni di suggerimento nella barra di ricerca
 private _suggestionsAutocomplete = signal<AutoCompleteSuggestions[]>([]);
 get suggestionsAutocomplete() {
   return this._suggestionsAutocomplete();
 }
 private _setSuggestionsAutocomplete(data: AutoCompleteSuggestions[]) {
   this._suggestionsAutocomplete.set(data);
 }

 public getTopbarData() {
   this.getDataeMSP();
   this.getDataSettingUserProfile();
   this.getDataNotifications();
   this.getDataSearchBar();
 }

 public getLocationsData(){
   this.getDataCard()
   this.getDataTable()
   this.getDataFilter()
 }

 // Metodi privati per impostare i segnali

 // Riceve le ultime pagine cercate
 getNavbarData() {
   this.genericApi.getData('nevbar').subscribe((data) => {
     this._setNavbarData(data);
   });
 }

 // Riceve i dati che deve contenere la barra di ricerca (autocomplete)
 private getDataSearchBar() {
   this.genericApi.getData('autocompleteList').subscribe((data) => {
     this._setSuggestionsAutocomplete(data);
   });
 }

 // Riceve i dati profilo
 private getDataSettingUserProfile() {
   this.genericApi.getData('userProfile').subscribe((data) => {
     this._setSettingProfile(data);
   });
 }

 // Riceve i dati che deve contenere eMSP
 private getDataeMSP() {
   this.genericApi.getData('dropdownOptionseMSP').subscribe((data) => {
     this._setOptionsDropdown(data);
   });
 }
 
 // Prende i dati che ho bisogno di mostrare nelle notifiche
 private getDataNotifications() {
   this.genericApi.getData('listboxItem').subscribe((data) => {
     this._setItemsListBox(data);
   });
 }

 // Prendo i dati relativi ai filtri contenuti in Locations
 private getDataFilter() {
   this.genericApi.getData('filterLocations').subscribe((data) => {
     this._setItemsFilter(data);
   });
 }

 // Prendo i dati relativi alle card contenute in Locations
 private getDataCard() {
   this.genericApi.getData('cardLocations').subscribe((data) => {
     this._setItemsCard(data);
   });
 }

 // Prendo i dati relativi alla tabella in Locations
 private getDataTable() {
   this.genericApi.getData('tableLocation').subscribe((data) => {
     this._setItemsTable(data);
   });
 }

  
  
  // getCardData(cardName: string[]) {
  //   const cardData: CardData[] = [];
  //   cardName.forEach((element: string) => {
  //     const object = {
  //       fields: element,
  //       value: this.dataSites()[element] as string | number
  //     };
  //     cardData.push(object);
  //   });
  //   return cardData;
  // }

}