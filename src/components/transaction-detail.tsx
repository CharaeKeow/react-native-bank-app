import { Text, View } from 'react-native';
import { Transaction } from '../types';

type TransactionDetailProps = {
  transaction: Transaction;
};

export const TransactionDetail = ({ transaction }: TransactionDetailProps) => {
  return (
    <View>
      <Text>Transaction ID: {transaction.id}</Text>
      <Text>Amount: {transaction.amount}</Text>
      <Text>Description: {transaction.description}</Text>
      <Text>Status: {transaction.status}</Text>
      {transaction.relatedParty ? (
        <View>
          <Text>Receiver Name: {transaction.relatedParty.name}</Text>
          <Text>Receiver ID: {transaction.relatedParty.id}</Text>
        </View>
      ) : null}
    </View>
  );
};
