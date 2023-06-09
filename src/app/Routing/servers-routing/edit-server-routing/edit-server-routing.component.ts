import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersRouteingService } from '../servers-routing.service';
import { CanComponentDeactivate } from '../../can-deactive-guard.service';
import { Observable } from 'rxjs';

export interface serverInterface {
  id?: number;
  name?: string;
  status?: string;
}
@Component({
  selector: 'intro-edit-server-routing',
  templateUrl: './edit-server-routing.component.html',
  styleUrls: ['./edit-server-routing.component.css'],
})
export class EditServerRoutingComponent
  implements OnInit, CanComponentDeactivate
{
  // server: { id: number; name: string; status: string };
  server: serverInterface | undefined;
  serverName: string | undefined = '';
  serverStatus: string | undefined = '';
  allowEdit: boolean = false;
  chanagedSaved: boolean = false;

  constructor(
    private serversService: ServersRouteingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.route.fragment.subscribe();
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    // Subscribte route param to update the id if params change!
    this.serverName = this.server?.name;
    this.serverStatus = this.server?.status;
  }

  onUpdateServer() {
    // @ts-ignore
    this.serversService.updateServer(this.server.id, {name: this.serverName,status: this.serverStatus,});
    this.chanagedSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server?.name ||
        this.serverStatus !== this.server?.status) &&
      !this.chanagedSaved
    ) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
