import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { LogginService } from '../services/loggin.service';

@Component({
  selector: 'intro-server-module',
  templateUrl: './server-module.component.html',
  styleUrls: ['./server-module.component.css'],
  providers: [AccountService],
})
export class ServerModuleComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(
    private accountService: AccountService,
    private logginService: LogginService
  ) {}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

  onAccountAdded(newAccount: { name: string; status: string }) {
    this.accountService.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: { id: number; newStatus: string }) {
    this.accountService.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
