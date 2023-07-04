import { Component, OnInit } from '@angular/core';
import { ProjectAuthService } from '../Services/project-auth.service';

@Component({
  selector: 'intro-project-modules',
  templateUrl: './project-modules.component.html',
  styleUrls: ['./project-modules.component.css'],
})
export class ProjectModulesComponent implements OnInit {
  constructor(private authService: ProjectAuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
