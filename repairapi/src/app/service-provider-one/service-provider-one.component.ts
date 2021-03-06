import { Component, OnInit } from '@angular/core';
import {ServiceProviders} from '../service-providers/service-providers';
import {ServiceProvidersService} from '../service-providers/service-providers.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-service-provider-one',
  templateUrl: './service-provider-one.component.html',
  styleUrls: ['./service-provider-one.component.css']
})
export class ServiceProviderOneComponent implements OnInit {

  serviceProvider = new ServiceProviders();

  constructor(private serviceProvidersService: ServiceProvidersService, private rout: ActivatedRoute) {
    this.rout.params.subscribe(next => {
      this.serviceProvidersService.getServiceProviderById(next['id']).subscribe(next => {
        this.serviceProvider = next;
      }, err => {
        console.log(err);
      })
    }, err => {
      console.log(err); 
    })
  }

  ngOnInit() {
  
  }

  

}
