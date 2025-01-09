import { Slot, Stack } from 'expo-router';

export default function HomeLayout() {
  return (
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
  );
}
