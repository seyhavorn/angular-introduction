import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../Services/data-storage.service';
import { ProjectAuthService } from '../Services/project-auth.service';

@Component({
  selector: 'intro-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private subscription!: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: ProjectAuthService
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe((user) => {
      // this.isAuthenticated = !user ? false : true;
      // is the same way for this!
      this.isAuthenticated = !!user;
      // console.log('!user', !user);
      // console.log('!!user', !!user);
    });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
