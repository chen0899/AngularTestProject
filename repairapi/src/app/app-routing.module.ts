import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceProviderOneComponent} from './service-provider-one/service-provider-one.component';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';
import { AddServiceProvidersComponent } from './add-service-providers/add-service-providers.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UpdateServiceProviderComponent } from './update-service-provider/update-service-provider.component';

const routes: Routes = [
  {path: '', component:  ServiceProvidersComponent},
  {path: 'service-provider/:id', component:  ServiceProviderOneComponent},
  {path: 'add-service-provider', component:  AddServiceProvidersComponent},
  {path: 'update-service-provider/:id', component:  UpdateServiceProviderComponent},
  {path: 'file', component: FileUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
