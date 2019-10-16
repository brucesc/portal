import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from 'src/app/shared/services/script-loader.service';

@Component({
  selector: 'portal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private scriptSvc: ScriptLoaderService) { }

  ngOnInit() {
    // this.scriptSvc.load('steven').then(data => {
    //   console.log('script loaded ', data);
    // }).catch(error => console.log(error));
  }

  loadScript = () => this.scriptSvc.load('steven').then(data => {
    console.log('script loaded ', data);
  }).catch(error => console.log(error));
}
