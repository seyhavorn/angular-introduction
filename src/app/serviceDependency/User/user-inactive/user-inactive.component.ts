import { Component, Input } from '@angular/core';
import { UserService } from "../user.service";

@Component({
   selector: 'intro-user-inactive',
   templateUrl: './user-inactive.component.html',
   styleUrls: ['./user-inactive.component.css']
})
export class UserInactiveComponent {
   users: string[] | undefined;

   constructor(private userService: UserService) {
   }

   ngOnInit() {
      this.users = this.userService.inactiveUsers;
   }

   onSetToActive(id: number) {
      this.userService.setToActive(id);
   }
}
