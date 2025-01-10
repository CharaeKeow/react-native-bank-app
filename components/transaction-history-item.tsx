import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Transaction } from '../types';
import { formatDate } from '../util/format-date';
import { Link } from 'expo-router';
import { formatTransactionAmount } from '../util/format-transaction-amount';
import { useAuth } from '../contexts/auth-provider';

type TransactionHistoryProps = {
  transaction: Transaction;
};

export const TransactionHistoryItem = ({
  transaction,
}: TransactionHistoryProps) => {
  const { isAuthenticated } = useAuth();

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
          {isAuthenticated
            ? formatTransactionAmount(transaction.amount, transaction.type)
            : '****'}
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
