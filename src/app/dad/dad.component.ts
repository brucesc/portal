import { Component, OnInit } from '@angular/core';
import { MicroAppLoaderService } from '../shared/services/micro-app-loader.service';

@Component({
  selector: 'portal-dad',
  templateUrl: './dad.component.html',
  styleUrls: ['./dad.component.scss']
})
export class DadComponent implements OnInit {

  dadId: string = 'steven-dad-id';
  constructor(private loaderSvc: MicroAppLoaderService) { }

  ngOnInit() {
  }

  getDadApp() {
    this.loaderSvc.load('steven', this.dadId);
  }
}
