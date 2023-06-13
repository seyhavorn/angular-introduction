import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'intro-obser-home',
  templateUrl: './obser-home.component.html',
  styleUrls: ['./obser-home.component.css'],
})
export class ObserHomeComponent implements OnInit, OnDestroy {
  private firstObsSubscriptino?: Subscription;

  constructor() {}

  ngOnInit(): void {
    // this.firstObsSubscriptino = interval(1000).subscribe((count) => {
    //   console.log('count', count);
    // });

    const customIntervalObser = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count it greate 3'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscriptino = customIntervalObser
      .pipe(
        filter((data: any) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        (data: any) => {
          console.log('data', data);
        },
        (error: any) => {
          console.log(error.message);
        },
        () => {
          console.log('Completed!');
        }
      );
  }

  ngOnDestroy(): void {
    this.firstObsSubscriptino?.unsubscribe();
  }
}
