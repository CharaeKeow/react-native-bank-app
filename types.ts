export type TransactionType = 'Debit' | 'Credit';

export type TransactionStatus = 'Completed' | 'Failed' | 'Pending';

// TODO: Not sure what's the suitable name for this. Shall revisit later if needs to
export type RelatedParty = {
  name: string;
  id: string;
};

export type Transaction = {
  id: string;
  amount: number;
  date: Date;
  description: string;
  type: TransactionType;
  status: TransactionStatus;
  /**
   * Not all transactions might have related party? E.g. ATM withdrawal For the scope of this app, will leave it as this first
   */
  relatedParty?: RelatedParty;
};
