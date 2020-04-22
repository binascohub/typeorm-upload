// import AppError from '../errors/AppError';

import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';

import Transaction from '../models/Transaction';

interface Resquest {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Resquest): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
