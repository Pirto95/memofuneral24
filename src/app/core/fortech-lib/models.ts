import { SafeHtml } from "@angular/platform-browser";
import { SelectItemGroup } from "primeng/api";

export type Dropdown = {
  label: string;
  value: string | number;
  description: string;
  disabled: boolean;
}

export type AutoCompleteSuggestions = {
  label: string;
  section: { icon: string;  section: string }
}

export type InfoMenu = {
  label: string;
  info: string;
  type?: string;
}

export type UserMenu = {
  name: string;
  surname: string;
  profile: SettingProfile;
  info: { label: string; location : string};
}

export type ListBox = {
  icon :  SafeHtml;
  label : string;
}

export interface SelectedElementList {
  name: string;
  code: string;
}

export interface SelectItem<T = any> {
  label?: string;
  value: T;
  styleClass?: string;
  icon?: string;
  title?: string;
  disabled?: boolean;
}

export interface SettingProfile {
  photoProfile : string,
  label :string
}

export type NavList = {
  icon : string;
  label : string;
  link : string;
  badge? : number;
  disabled : boolean;
}

export interface NavBarData {
  menu: NavList[];
  submenu: SelectItemGroup[];
}

export type Card = {
  isPresentImage : boolean;
  icon : string;
  header : string;
  fields : string;
  disabled?: boolean
}

export interface TableData {
  columns: TableColumn[];
  rows: TableRowLocation[];
}

export interface TableColumn {
  header: string;
  field: string;
}

export interface TableRowLocation {
  site : string;
  city : string;
  session : number | string ;
  connector: number | string;
  isOpen : boolean | string;
  [key: string]: any;
}

export interface Filter {
  label: string;
  filter?: string | undefined;
  placeholder : string
  value: [{
    label : string,
    value : string
  }
  ]
}

export interface filtersPlaceholder {
  value : string;
  label : string;
}
