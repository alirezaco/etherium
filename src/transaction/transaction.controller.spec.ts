import { Test, TestingModule } from '@nestjs/testing';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

describe('TransactionController', () => {
  let controller: TransactionController;
  let service: TransactionService;

  const TransactionServiceMock = {
    checkTransaction: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionController],
      providers: [TransactionService],
    })
      .overrideProvider(TransactionService)
      .useValue(TransactionServiceMock)
      .compile();

    controller = module.get<TransactionController>(TransactionController);
  });

  describe('check transaction', () => {
    const token: string = '';

    it('done', async () => {
      TransactionServiceMock.checkTransaction.mockResolvedValue(true);

      expect(await controller.checkTransaction(token)).toEqual({
        status: true,
        data: {
          transaction: true,
        },
      });
    });

    it("It's not done", async () => {
      TransactionServiceMock.checkTransaction.mockResolvedValue(false);

      expect(await controller.checkTransaction(token)).toEqual({
        status: true,
        data: {
          transaction: false,
        },
      });
    });
  });
});
