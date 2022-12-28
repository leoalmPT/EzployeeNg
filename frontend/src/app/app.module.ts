import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { ApiRequestsService } from './services/api-requests.service';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';
import { OffersPageComponent } from './pages/offers-page/offers-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { ReservedAreaPageComponent } from './pages/reserved-area-page/reserved-area-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { CompanyPageComponent } from './pages/company-page/company-page.component';
import { OfferPageComponent } from './pages/offer-page/offer-page.component';
import { RegisterCompanyPageComponent } from './pages/register-company-page/register-company-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompanyCardComponent,
    CompaniesPageComponent,
    OffersPageComponent,
    IndexPageComponent,
    ReservedAreaPageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    OfferCardComponent,
    CompanyPageComponent,
    OfferPageComponent,
    RegisterCompanyPageComponent,
    LoginComponent,
    RegisterComponent,
    RegisterCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiRequestsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
