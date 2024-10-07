import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CapitalizeTextPipe } from './core/pipes/capitalize-text.pipe';
import { NavBarComponent } from './cpms/shared/components/nav-bar/nav-bar.component';
import { TopBarComponent } from './cpms/shared/components/top-bar/top-bar.component';
import { LocationsComponent } from "./cpms/features/locations/locations.component";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule,
    CapitalizeTextPipe,
    TopBarComponent,
  ],
  providers: [AuthService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MemoFunerl24';
  translate = inject(TranslateService);
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    this.translate.setDefaultLang('it');
    this.translate.use('it');
  }

  ngOnInit() {
    // if (!this.authService.isAuthenticated()) {
    //   this.router.navigate(['/login']);
    // }
  }
}
