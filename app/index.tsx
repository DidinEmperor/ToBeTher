import { View, Text, Button, FlatList, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Reminder = {
  id: string;
  title: string;
  time: string;
};

export default function HomeScreen() {
  const router = useRouter();
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await AsyncStorage.getItem('reminders');
      if (data) setReminders(JSON.parse(data));
    };
    load();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Tambah Pengingat" onPress={() => router.push('/add')} />
      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push({ pathname: '/detail', params: { title: item.title, time: item.time } })}>
            <View style={{ padding: 10, backgroundColor: '#eee', marginVertical: 5 }}>
              <Text>{item.title}</Text>
              <Text>{item.time}</Text>
            </View>
          </Pressable>
        )}
      />
      <Button title="Pengaturan" onPress={() => router.push('/settings')} />
    </View>
  );
}
