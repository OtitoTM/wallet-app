import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../s/wallet.service';

@Component({
  selector: 'app-wallet-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallet-management.component.html',
  styleUrl: './wallet-management.component.css'
})
export class WalletManagementComponent implements OnInit {
  wallets: { name: string; balance: number; }[] = [
    { name: 'Main Wallet', balance: 1000 },
    { name: 'Savings Wallet', balance: 5000 }
  ];

  constructor(private walletService: WalletService) {}

  ngOnInit() {
    this.walletService.getWallets().subscribe(data => {
      this.wallets = data;
    });
  }


}
