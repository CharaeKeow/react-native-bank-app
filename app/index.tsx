import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function TransactionHistory() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Link style={styles.button} href={`/transaction/${1}`}>
        Transaction detail
      </Link>
    </View>
  );
}

// TODO: Nativewind
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
