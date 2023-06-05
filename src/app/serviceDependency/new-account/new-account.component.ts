import {Component, EventEmitter, Output} from '@angular/core';
import {AccountService} from '../services/account.service';
import {LoginService} from "../services/loginService";

@Component({
  selector: 'intro-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    private accountService: AccountService,
    private loginService: LoginService,
  ) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
