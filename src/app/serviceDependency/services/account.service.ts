import {EventEmitter, Injectable} from '@angular/core';
import { LoginService } from './loginService';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private logginService: LoginService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.logginService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logginService.logStatusChange(status);
  }
}
