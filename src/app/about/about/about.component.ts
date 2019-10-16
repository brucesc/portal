import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from 'src/app/shared/services/script-loader.service';

@Component({
  selector: 'portal-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private scriptSvc: ScriptLoaderService) { }

  ngOnInit() {
  }

  loadScript = () => this.scriptSvc.load('charlie').then(data => {
    console.log('script loaded ', data);
  }).catch(error => console.log(error));
}
