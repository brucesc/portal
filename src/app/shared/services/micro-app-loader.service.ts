import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicroAppLoaderService {

  private configs: any[] = []
  config = {
    "steven": {
      loaded: false,
      path: 'http://localhost:8081/main.js',
      element: 'steven-dad-power'
    },
    "charlie": {
      loaded: false,
      path: 'http://localhost:8082/main.js',
      element: 'charlie-kid-energy'
    }
  }
  constructor() { }

  load(name: string, elementId: string): void {
    const configItem = this.config[name];

    // If the script is not already loaded, load it!
    if (!configItem.loaded) this.loadScript(configItem);

    // Create the custom element at the desired view port. This is really an element that represents an entire angular app!
    this.renderElement(configItem, elementId);
  }

  private loadScript(configItem: any): void {
    const script = document.createElement('script');
    script.src = configItem.path;
    script.onerror = () => console.error(`error loading ${configItem.path}`);
    document.getElementsByTagName('head')[0].appendChild(script);
    configItem.loaded = true;
  }

  private renderElement(configItem: any, elementId: string): void {
    const renderLocation = document.getElementById(`${elementId}`);
    const element: HTMLElement = document.createElement(configItem.element);
    element.addEventListener('message', msg => this.handleMessage(msg));
    renderLocation.appendChild(element);
    element.setAttribute('state', 'init');
  }
  handleMessage(msg): void {
    console.debug('portal recieved message: ', msg.detail);
  }
}
