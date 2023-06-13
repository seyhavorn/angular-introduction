import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ObserUserService } from '../obser-user.service';

@Component({
  selector: 'intro-obser-user',
  templateUrl: './obser-user.component.html',
  styleUrls: ['./obser-user.component.css'],
})
export class ObserUserComponent {
  id?: number;

  constructor(
    private route: ActivatedRoute,
    private useService: ObserUserService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }

  onActivate() {
    this.useService.activatedEmitter.next(true);
  }
}
