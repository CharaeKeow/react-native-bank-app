import { StyleSheet, Text, View } from 'react-native';
import { Transaction, TransactionStatus, TransactionType } from '../types';
import { formatTransactionAmount } from '../util/format-transaction-amount';
import { formatDate } from '../util/format-date';

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

  const processRelatedPartyLabel = (type: TransactionType) => {
    if (type === 'Credit') {
      return 'Transfer from';
    }

    return 'Payment to';
  };

  const relatedPartyLabel = processRelatedPartyLabel(transaction.type);

  return (
    <View style={styles.container}>
      <Text style={styles.amount}>
        {formatTransactionAmount(transaction.amount, transaction.type)}
      </Text>
      <Text style={styles.date}>{formatDate(transaction.date)}</Text>
      <View style={styles.transactionDetailRow}>
        <Text style={styles.label}>Status: </Text>
        <Text
          style={[
            styles.value,
            styles.status,
            processStatusStyling(transaction.status),
          ]}
        >
          {transaction.status}
        </Text>
      </View>
      <View style={styles.transactionDetailRow}>
        <Text style={styles.label}>Transaction ID: </Text>
        <Text style={styles.value}>{transaction.id}</Text>
      </View>

      <View style={styles.transactionDetailRow}>
        <Text style={styles.label}>Description: </Text>
        <Text style={styles.value}>{transaction.description}</Text>
      </View>
      {transaction.relatedParty ? (
        <View style={styles.transactionDetailRow}>
          <Text style={styles.label}>{relatedPartyLabel} </Text>
          <Text style={styles.value}>{transaction.relatedParty.name}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    flexGrow: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#EFF5FA',
    borderRadius: 6,
  },
  amount: {
    fontSize: 24,
    fontWeight: '700',
  },
  date: {
    fontSize: 16,
  },
  transactionDetailRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
  },
  value: {
    fontSize: 18,
  },
  status: {
    fontWeight: '700',
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
