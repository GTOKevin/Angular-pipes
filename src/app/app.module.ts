import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeEsPe from '@angular/common/locales/es-PE';
import localeEsFr from '@angular/common/locales/fr';
import localeEsRu from '@angular/common/locales/ru';
import {registerLocaleData} from '@angular/common';




registerLocaleData(localeEsPe);
registerLocaleData(localeEsFr);
registerLocaleData(localeEsRu);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
    
  ],
  providers: [{
    provide:LOCALE_ID,useValue:'es-PE'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
