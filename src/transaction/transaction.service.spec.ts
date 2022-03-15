import { Test, TestingModule } from '@nestjs/testing';
import { TransactionService } from './transaction.service';

const checkTrancactionMock = jest.fn();
const CheckTrancactionMock = jest.mock('./checkTracsaction', () => {
  return jest.fn().mockImplementation(() => {
    return { checkTrancaction: checkTrancactionMock };
  });
});

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionService],
    }).compile();

    service = module.get<TransactionService>(TransactionService);
  });

  describe('check transaction token', () => {
    it('done', async () => {
      checkTrancactionMock.mockResolvedValue(true);

      expect(await service.checkTransaction('')).toEqual(true);
    });

    it("It's not done", async () => {
      checkTrancactionMock.mockResolvedValue(true);

      expect(await service.checkTransaction('')).toEqual(true);
    });
  });
});
