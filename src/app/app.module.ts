import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { CorreioService } from '../app/correio.service';
import { ArmazenamentoService } from '../app/services/armazenamento.service';
import { IonicStorageModule } from '@ionic/storage';
//import { SQLiteOriginal } from '@ionic-native/sqlite';
//import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    IonicStorageModule.forRoot(),
    // SQLiteOriginal,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CorreioService,
    ArmazenamentoService,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Grande sacada para formatar numeros e datas no formato brasileiro
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
