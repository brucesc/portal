import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../shared/services/script-loader.service';
import { MicroAppLoaderService } from '../shared/services/micro-app-loader.service';

@Component({
  selector: 'portal-dad',
  templateUrl: './dad.component.html',
  styleUrls: ['./dad.component.scss']
})
export class DadComponent implements OnInit {

  dadId: string = 'steven-dad-id';
  constructor(private scriptSvc: ScriptLoaderService,
              private loaderSvc: MicroAppLoaderService) { }

  ngOnInit() {
  }

  loadScript = () => this.scriptSvc.load('steven').then(data => {
    console.log('script loaded ', data);
  }).catch(error => console.log(error));
  // TODO : Create the html custom element and point the script to it

  getDadApp() {
    this.loaderSvc.load('steven', this.dadId);
  }
}
