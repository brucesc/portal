import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MicroAppLoaderService } from '../services/micro-app-loader.service';

@Injectable({
  providedIn: 'root'
})
export class ScriptPrefetchResolverService implements Resolve<any> {
  
  constructor(
    private loader: MicroAppLoaderService,
    private router: Router
  ) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let appName = route.routeConfig.path;
    console.log("TCL: ScriptPrefetchResolverService -> resolve -> appName", appName)
    if (appName === 'dad') appName = 'stevenApp';

    return this.loader.prefetchAppScript(appName) ? true : this.router.navigate(['/home']);
  }

}
