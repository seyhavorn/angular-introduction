import { Component, Input } from '@angular/core';
import { LogginService } from '../services/loggin.service';
import { AccountService } from '../services/account.service';

type NewType = AccountService;

@Component({
  selector: 'intro-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  constructor(private accountService: AccountService) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
  }
}
