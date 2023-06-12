import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ServersRouteingService } from '../servers-routing.service';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerRoutingResolver implements Resolve<Server | Observable<Server> | Promise<Server> | undefined> {
  constructor(private serversRouteingService: ServersRouteingService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server | undefined {
    const serverId = +route.params['id'];
    return this.serversRouteingService.getServer(serverId);
  }
}
