import { Body, Controller, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async checkTransaction(@Body('token') token: string) {
    return {
      status: true,
      data: {
        transaction: await this.transactionService.checkTransaction(token),
      },
    };
  }
}
