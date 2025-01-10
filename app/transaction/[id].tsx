import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { getTransactionData } from '../../data/get-transaction-data';
import { TransactionDetail } from '../../components/transaction-detail';
import { useAuth } from '../../contexts/auth-provider';

export default function TransactionDetailScreen() {
  const { id } = useLocalSearchParams();
  const { isAuthenticated, login } = useAuth();

  // Authentication guard - if user is not logged in, ask user to authenticate first before they can view the transaction detail
  // Note: When app becomes bigger and contains more screen, should lift this up somewhere - e.g. in provider level
  if (!isAuthenticated) {
    login();
    return null;
  }

  // Fetch transaction by id
  const transaction = getTransactionData().find((trx) => trx.id === id);

  if (!transaction) {
    return (
      <View style={styles.container}>
        <Text>Transaction not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TransactionDetail transaction={transaction} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
