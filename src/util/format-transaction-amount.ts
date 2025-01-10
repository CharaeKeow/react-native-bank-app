import { TransactionType } from '../types';

const processTransactionTypeSymbol = (type: TransactionType): string => {
  if (type === 'Credit') {
    return '+';
  }

  return '-';
};

/**
 * Helper function to format transaction amount text to put currency and minus/plus (based on transaction type) text in front of the amount
 */
export const formatTransactionAmount = (
  amount: number,
  type: TransactionType
) => {
  return `${processTransactionTypeSymbol(type)}RM ${amount}`;
};
