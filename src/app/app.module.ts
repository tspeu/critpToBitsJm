import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { HomePageModule } from '../pages/home/home.module';
import { HoldingsProvider } from '../providers/holdings/holdings';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      preloadModules: true
    }), 
    IonicStorageModule.forRoot(),
    HttpClientModule,
    HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    // ,HomePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HoldingsProvider
  ]
})
export class AppModule {}
