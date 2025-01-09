import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Transaction, TransactionType } from '../types';
import { formatDate } from '../util/format-date';
import { Link } from 'expo-router';
import { formatTransactionAmount } from '../util/format-transaction-amount';

type TransactionHistoryProps = {
  transaction: Transaction;
};

export const TransactionHistoryItem = ({
  transaction,
}: TransactionHistoryProps) => {
  return (
    <Link href={`/transaction/${transaction.id}`} asChild>
      <TouchableOpacity style={styles.transactionItem}>
        <View>
          <Text style={styles.description}>{transaction.description}</Text>
          <Text style={styles.date}>{formatDate(transaction.date)}</Text>
        </View>
        <Text
          style={[
            styles.amount,
            transaction.type === 'Debit' ? styles.debit : styles.credit,
          ]}
        >
          {formatTransactionAmount(transaction.amount, transaction.type)}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  transactionItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {},
  date: {},
  amount: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  debit: {
    color: '#d00000',
  },
  credit: {
    color: '#137027',
  },
});
