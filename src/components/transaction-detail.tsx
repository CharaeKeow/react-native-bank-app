import { StyleSheet, Text, View } from 'react-native';
import { Transaction, TransactionStatus, TransactionType } from '../types';
import { formatTransactionAmount } from '../util/format-transaction-amount';

type TransactionDetailProps = {
  transaction: Transaction;
};

export const TransactionDetail = ({ transaction }: TransactionDetailProps) => {
  const processStatusStyling = (status: TransactionStatus) => {
    if (status === 'Completed') {
      return styles.statusCompleted;
    } else if (status === 'Failed') {
      return styles.statusFailed;
    } else {
      return styles.statusPending;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.amount}>
        {formatTransactionAmount(transaction.amount, transaction.type)}
      </Text>
      <View style={styles.transactionDetailRow}>
        <Text style={styles.label}>Status: </Text>
        <Text style={[styles.label, processStatusStyling(transaction.status)]}>
          {transaction.status}
        </Text>
      </View>
      <Text>Transaction ID: {transaction.id}</Text>
      <Text>Description: {transaction.description}</Text>
      {transaction.relatedParty ? (
        <View>
          <Text>Receiver Name: {transaction.relatedParty.name}</Text>
          <Text>Receiver ID: {transaction.relatedParty.id}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  amount: {
    fontSize: 24,
    fontWeight: '700',
  },
  transactionDetailRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
  },
  statusCompleted: {
    color: '#137027',
  },
  statusFailed: {
    color: '#d00000',
  },
  statusPending: {
    color: '#999999',
  },
});
