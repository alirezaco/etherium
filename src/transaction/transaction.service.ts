import { Inject, Injectable } from '@nestjs/common';
import CheckTracsaction from './checkTracsaction';

@Injectable()
export class TransactionService {
  constructor() {}

  async checkTransaction(token: string): Promise<Boolean> {
    const transaction: CheckTracsaction = new CheckTracsaction();

    return transaction.checkTrancaction(token);
  }
}
