import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';
import {ServiceProvidersService} from './service-providers/service-providers.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ServiceProviderOneComponent} from './service-provider-one/service-provider-one.component';
import { AddServiceProvidersComponent } from './add-service-providers/add-service-providers.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {FileSelectDirective} from "ng2-file-upload";
import { UpdateServiceProviderComponent } from './update-service-provider/update-service-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceProvidersComponent,
    ServiceProviderOneComponent,
    AddServiceProvidersComponent,
    FileUploadComponent,
    FileSelectDirective,
    UpdateServiceProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceProvidersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
