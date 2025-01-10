import { Button, FlatList, StyleSheet } from 'react-native';
import { getTransactionData } from '../src/data/get-transaction-data';
import { TransactionHistoryItem } from '../src/components/transaction-history-item';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../src/contexts/auth-provider';

export default function TransactionHistory() {
  const transactions = getTransactionData();

  const { isAuthenticated, login, logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={isAuthenticated ? 'Logout' : 'Login'}
        onPress={() => (isAuthenticated ? logout() : login())}
      />

      <FlatList
        style={styles.listContainer}
        data={transactions}
        renderItem={({ item }) => <TransactionHistoryItem transaction={item} />}
      />
    </SafeAreaView>
  );
}

// TODO: Nativewind
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingTop: 8,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#032b43',
    color: '#ffffff',
    fontWeight: 600,
    paddingHorizontal: 16,
    paddingBlock: 8,
    borderRadius: 6,
  },
});
