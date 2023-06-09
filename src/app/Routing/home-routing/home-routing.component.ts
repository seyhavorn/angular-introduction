import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Auth.service';

@Component({
  selector: 'intro-home-routing',
  templateUrl: './home-routing.component.html',
  styleUrls: ['./home-routing.component.css'],
})
export class HomeRoutingComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onLoadServer(id: number) {
    this.router.navigate([
      '/servers',
      id,
      'edit',
      { queryParams: { allowEdit: '1' }, fragment: 'loading' },
    ]);
  }

  onLogout() {
    this.authService.logout();
  }

  onLogin() {
    this.authService.login();
  }
}
