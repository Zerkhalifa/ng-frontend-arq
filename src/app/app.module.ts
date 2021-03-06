import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UserRegitrationComponent } from './components/user-regitration/user-regitration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomeComponent } from './components/home/home.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CooperProfileComponent } from './components/cooper-profile/cooper-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SpinnerComponent } from './templates/spinner/spinner.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { PublicDashboardComponent } from './components/public-dashboard/public-dashboard.component';
import { CooperDashboardComponent } from './components/cooper-dashboard/cooper-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SupportDashboardComponent } from './components/support-dashboard/support-dashboard.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ServiceRegistrationComponent } from './components/service-registration/service-registration.component';
import { ServiceListAdminComponent } from './components/service-list-admin/service-list-admin.component';
import { TypeServiceComponent } from './components/type-service/type-service.component';
import { EditServiceComponent } from './components/service-list-admin/edit-service/edit-service.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PublicServicesComponent } from './components/public-services/public-services.component';
import { CommonModule } from '@angular/common';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


const maskConfig: Partial<IConfig> = {};

@NgModule( {
  declarations: [
    AppComponent,
    UserRegitrationComponent,
    UserLoginComponent,
    HomeComponent,
    SearchResultComponent,
    UserProfileComponent,
    CooperProfileComponent,
    SpinnerComponent,
    PublicDashboardComponent,
    ServiceRegistrationComponent,
    CooperDashboardComponent,
    AdminDashboardComponent,
    SupportDashboardComponent,
    EditProfileComponent,
    ServiceListAdminComponent,
    TypeServiceComponent,
    EditServiceComponent,
    PublicServicesComponent,
    ServiceDetailsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register( 'ngsw-worker.js', { enabled: environment.production } ),
    ReactiveFormsModule,
    NgxMaskModule.forRoot( maskConfig ),
    MatButtonModule,
    SweetAlert2Module.forRoot(),
    FontAwesomeModule,
    MatTooltipModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
  constructor( private library: FaIconLibrary ) {
    library.addIconPacks( fas, far, fab );
  }
}
