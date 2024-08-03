import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WalletService } from '../../s/wallet.service';

@Component({
  selector: 'app-wallet-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallet-management.component.html',
  styleUrl: './wallet-management.component.css'
})
export class WalletManagementComponent {
  wallets = [];

  constructor(private walletService: WalletService) {}

  ngOnInit() {
    this.walletService.getWallets().subscribe(data => {
      this.wallets = data;
    });
  }


}
