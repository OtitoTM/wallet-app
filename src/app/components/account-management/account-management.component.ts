import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccountService } from '../../s/account.service';

@Component({
  selector: 'app-account-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-management.component.html',
  styleUrl: './account-management.component.css'
})
export class AccountManagementComponent {
   accounts = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAccounts().subscribe(data => {
      this.accounts = data;
    });
  }

}
