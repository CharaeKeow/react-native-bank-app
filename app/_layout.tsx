import { Slot, Stack } from 'expo-router';
import { AuthProvider } from '../src/contexts/auth-provider';

export default function HomeLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Transactions',
          }}
        />
        <Stack.Screen
          name="transaction/[id]"
          options={{
            title: 'Transaction Detail',
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
