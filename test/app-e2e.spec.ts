import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { TransactionService } from '../src/transaction/transaction.service';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let app: INestApplication;
  const TransactionServiceMock = {
    checkTransaction: jest.fn(),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(TransactionService)
      .useValue(TransactionServiceMock)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/post transaction`, () => {
    TransactionServiceMock.checkTransaction.mockResolvedValue(false);

    return request(app.getHttpServer())
      .post('/transaction')
      .send({
        token: 'test',
      })
      .expect(200)
      .expect({
        status: true,
        data: {
          transaction: false,
        },
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
