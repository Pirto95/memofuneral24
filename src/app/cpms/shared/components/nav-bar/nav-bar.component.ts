import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FtNavListComponent } from '../../../../core/fortech-lib/ft-nav-list/ft-nav-list.component';
import { FtListboxComponent } from '../../../../core/fortech-lib/ft-listbox/ft-listbox.component';
import { SelectItemGroup } from 'primeng/api';
import { GenericapiService } from '../../services/generic-api.service';
import { StoreService } from '../../services/store.service';
import { TranslateModule } from '@ngx-translate/core';
import { NavBarData, NavList, SelectItem } from '../../../../core/fortech-lib/models';
import { ActivatedRoute, NavigationEnd, provideRouter, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    FtNavListComponent,
    FtListboxComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  store = inject(StoreService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  //Pagine attuali
  navbarItems = computed<NavBarData>(() => {
    return this.store.navbarData
  });


  //rotta attuale
  routeActive = signal<string>('panoramica')
  
  constructor(){
    this.store.getNavbarData()
  }

  ngOnInit(): void {
   // Ascolta gli eventi di navigazione per aggiornare la rotta attiva
   this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event) => {
    if (event instanceof NavigationEnd) {
      const currentRoute = event.urlAfterRedirects.split('/')[1];
      this.routeActive.set(currentRoute);
    }
  });
  }

  //Si attiva una volta selezionata una pagina dalla Navbar e deve essere aggiunta la logica per cambira pagina
  changeRoute(route : string | SelectItem){
    if (typeof route === 'string') {
      this.router.navigate([route]);
    } else {
      this.router.navigate([route.value]);
    }
  }

}

