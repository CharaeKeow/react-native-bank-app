import {
  Button,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import { getTransactionData } from '../src/data/get-transaction-data';
import { TransactionHistoryItem } from '../src/components/transaction-history-item';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../src/contexts/auth-provider';
import { useState } from 'react';

export default function TransactionHistory() {
  const transactions = getTransactionData(); // TODO: What's the equivalent of react-query for React Native for data fetching? Replace if got time

  const [transactionData, setTransactionData] = useState(transactions.slice(1)); // Slice one transaction out so that we can test refreshing to get data
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { isAuthenticated, login, logout } = useAuth();

  // A fake function to simulate refreshing data
  const handleRefresh = () => {
    setIsRefreshing(true);

    // Simulate a fast network request waiting time
    setTimeout(() => {
      setTransactionData(transactions); // replace data with new data
      setIsRefreshing(false);
    }, 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={isAuthenticated ? 'Logout' : 'Login'}
        onPress={() => (isAuthenticated ? logout() : login())}
      />

      <FlatList
        style={styles.flatListContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={transactionData}
        renderItem={({ item }) => <TransactionHistoryItem transaction={item} />}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  flatListContainer: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingTop: 8,
    paddingBottom: 20,
  },
  separator: {
    height: 8,
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
