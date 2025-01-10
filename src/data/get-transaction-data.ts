import { Transaction, TransactionStatus, TransactionType } from '../types';
import transactionData from './transaction-data.json';

export function getTransactionData(): Transaction[] {
  return transactionData.transactions.map((transaction) => ({
    ...transaction,
    date: new Date(transaction.date),
    // Type assertion is not ideal, but in this case we assume the type from data source is always correct (for simplicity)
    // in real world we're likely to have validation, Typespec, etc. for this
    // TODO: revisit this if have time and implement other way to make it more robust
    type: transaction.type as TransactionType,
    status: transaction.status as TransactionStatus,
  }));
}
