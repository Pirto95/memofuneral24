import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CapitalizeTextPipe } from './core/pipes/capitalize-text.pipe';
import { NavBarComponent } from './cpms/shared/components/nav-bar/nav-bar.component';
import { TopBarComponent } from './cpms/shared/components/top-bar/top-bar.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
      ],
      imports: [
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        AppComponent,
        CapitalizeTextPipe,
        NavBarComponent,
        TopBarComponent,
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
  });

  it('dovrebbe essere creato', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`dovrebbe avere come titolo 'Gag'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Gag');
  });

  it('dovrebbe impostare la lingua predefinita su "it"', () => {
    spyOn(translateService, 'setDefaultLang');
    spyOn(translateService, 'use');

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(translateService.setDefaultLang).toHaveBeenCalledWith('it');
    expect(translateService.use).toHaveBeenCalledWith('it');
  });
});
