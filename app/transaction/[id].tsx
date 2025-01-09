import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function TransactionDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Transaction detail</Text>
      <Text>ID: {id}</Text>
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
