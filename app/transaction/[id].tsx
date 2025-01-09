import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getTransactionData } from '../../data/get-transaction-data';

export default function TransactionDetailScreen() {
  const { id } = useLocalSearchParams();

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
      <Text>Transaction detail</Text>
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

      <StatusBar style="auto" />
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
