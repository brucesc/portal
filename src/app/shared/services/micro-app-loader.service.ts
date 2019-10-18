import { Injectable } from '@angular/core';
import { MICRO_APP_STORE } from './micro-app-store';

@Injectable({
  providedIn: 'root'
})
export class MicroAppLoaderService {

  // TODO : Load the script in a route resolver instead of component onInit?
  private configs: any = {};

  constructor() { 
    MICRO_APP_STORE.forEach((config: any) => {
      this.configs[config.name] = {
        loaded: false,
        path: config.path,
        element: config.element
      }
    })
  }

  prefetchAppScript(appName): boolean {
    const configItem = this.configs[appName];
    // If the script is not already loaded, load it!
    // if (!configItem.loaded) return this.getScript(configItem);
    return !configItem.loaded ? this.getScript(configItem) : true;
  }
  
  load(appName: string, elementId: string): void {
    const configItem = this.configs[appName];
    // If the script is not already loaded, load it!
    if (!configItem.loaded) this.getScript(configItem);
    // Create the custom element at the desired view port. This is really an element that represents an entire angular app!
    this.renderElement(configItem, elementId);
  }

  private getScript(configItem: any): boolean {
    const script = document.createElement('script');
    script.src = configItem.path;

    // TODO : on error do something better, cancel route? popup message?
    script.onerror = () => {
      console.error(`error loading ${configItem.path}`);
      return false;
    }
    document.getElementsByTagName('head')[0].appendChild(script);
    configItem.loaded = true;
    console.log(`Config Loaded`);
    return true;
  }

  private renderElement(configItem: any, elementId: string): void {
    const renderLocation = document.getElementById(`${elementId}`);
    const element: HTMLElement = document.createElement(configItem.element);
    element.addEventListener('message', msg => this.handleMessage(msg));
    renderLocation.appendChild(element);
    // TODO : Pass auth token here?
    element.setAttribute('state', 'init');
  }
  
  handleMessage(msg): void {
    console.debug('portal recieved message: ', msg.detail);
  }
}
