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

  /**
   * This func is to be used by a route resolver, when routing to a component that references a custom element in template
   * @param appName The name of the microapp as described in the constant MICRO_APP_STORE
   */
  prefetchAppScript(appName): boolean {
    // If the script is not already loaded, load it!
    return !this.configs[appName].loaded ? this.getScript(this.configs[appName]) : true;
  }
  
  /**
   * This func will get a microapp's main.js by creating a script element and then creates the custom element
   *  to trigger the microapp's ngDoBootstrap.
   * @param appName The name of the microapp as described in the constant MICRO_APP_STORE
   * @param elementId The containing element's id attribute where the custom element should be rendered
   */
  load(appName: string, elementId: string): void {
    // If the script is not already loaded, load it!
    if (!this.configs[appName].loaded) this.getScript(this.configs[appName]);
    // Create the custom element at the desired view port. This is really an element that represents an entire angular app!
    this.renderElement(this.configs[appName], elementId);
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
    console.log(this.configs);
    return true;
  }

  private renderElement(configItem: any, elementId: string): void {
    const renderLocation = document.getElementById(`${elementId}`);
    const element: HTMLElement = document.createElement(configItem.element);
    // Respond to @Outputs of the microapp
    element.addEventListener('message', msg => this.handleMessage(msg));
    renderLocation.appendChild(element);
    // TODO : Pass auth token here?
    element.setAttribute('state', 'init');
  }
  
  handleMessage(msg): void {
    console.debug('portal recieved message: ', msg.detail);
  }
}
