import { Component, OnInit } from '@angular/core';
import { ServiceProviders } from '../service-providers/service-providers';
import { ServiceProvidersService } from '../service-providers/service-providers.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-service-providers',
  templateUrl: './add-service-providers.component.html',
  styleUrls: ['./add-service-providers.component.css']
})
export class AddServiceProvidersComponent implements OnInit {

  serviceProvider = new ServiceProviders();

  constructor(private serviceProvidersService: ServiceProvidersService) { }

  ngOnInit() {
  }

  addServicerovider(): void {
    this.serviceProvidersService.addServiceProviders(this.serviceProvider)
      .subscribe((response) => {
        console.log(response);
        alert("Provider saved!");

      }, (error) => {
        console.log(error);
      });
  }

}
