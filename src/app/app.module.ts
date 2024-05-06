import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCardsComponent } from './pages/main-cards/main-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailCardComponent } from './pages/detail-card/detail-card.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailShopingComponent } from './pages/detail-shoping/detail-shoping.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCardsComponent,
    FooterComponent,
    HeaderComponent,
    DetailCardComponent,
    DetailShopingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
