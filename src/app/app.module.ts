import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AddNewHotelComponent } from './add-new-hotel/add-new-hotel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewHotelComponent } from './view-hotel/view-hotel.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    FaqComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    SignupComponent,
    SigninComponent,
    AddNewHotelComponent,
    DashboardComponent,
    ViewHotelComponent,
    ViewRoomComponent,
    ViewTicketsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
