import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../s/transaction.service';

@Component({
  selector: 'app-transaction-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-management.component.html',
  styleUrl: './transaction-management.component.css'
})
export class TransactionManagementComponent implements OnInit {
  transactions: { description: string; amount: number; }[] = [
    { description: 'Grocery', amount: 50 },
    { description: 'Rent', amount: 500 }
  ];
  constructor (private transactionService: TransactionService) {}

   ngOnInit() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

}
