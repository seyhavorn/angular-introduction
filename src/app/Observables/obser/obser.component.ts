import { Component, OnDestroy, OnInit } from '@angular/core';
import { ObserUserService } from '../obser-user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'intro-obser',
  templateUrl: './obser.component.html',
  styleUrls: ['./obser.component.css'],
})
export class ObserComponent implements OnInit, OnDestroy {
  usersActivated: boolean = false;
  private activatedSub?: Subscription;

  constructor(private obserUserService: ObserUserService) {}

  ngOnInit(): void {
    this.activatedSub = this.obserUserService.activatedEmitter.subscribe(
      (didActivate) => {
        this.usersActivated = didActivate;
      }
    );
  }

  ngOnDestroy(): void {
    this.activatedSub?.unsubscribe();
  }
}
