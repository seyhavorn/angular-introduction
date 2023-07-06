import { Component, OnInit } from '@angular/core';
import { ProjectAuthService } from '../Services/project-auth.service';
import { LogginService } from '../Services/loggin.service';

@Component({
  selector: 'intro-project-modules',
  templateUrl: './project-modules.component.html',
  styleUrls: ['./project-modules.component.css'],
})
export class ProjectModulesComponent implements OnInit {
  constructor(
    private authService: ProjectAuthService,
    private logginService: LogginService
  ) {}

  ngOnInit(): void {
    this.authService.autoLogin();
    this.logginService.printLog('Hello from App Component NgOnint');
  }
}
