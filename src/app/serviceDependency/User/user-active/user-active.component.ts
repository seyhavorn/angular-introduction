import { Component } from '@angular/core';
import { UserService } from "../user.service";

@Component({
   selector: 'intro-user-active',
   templateUrl: './user-active.component.html',
   styleUrls: ['./user-active.component.css']
})
export class UserActiveComponent {
   users: string[] | undefined;

   constructor(private userService: UserService) {
   }

   ngOnInit(): void {
      this.users = this.userService.activeUsers;
   }

   onSetToInactive(id: number) {
      this.userService.setToInactive(id);
   }
}
