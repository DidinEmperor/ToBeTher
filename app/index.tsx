import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Reminder } from "../types/reminder";

export default function HomeScreen() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const router = useRouter();

  useEffect(() => {
    const loadReminders = async () => {
      const data = await AsyncStorage.getItem("reminders");
      if (data) setReminders(JSON.parse(data));
    };

    loadReminders();
    const interval = setInterval(loadReminders, 1000); // optional auto refresh
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Tambah Pengingat" onPress={() => router.push("/add")} />
      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push({ pathname: "/detail", params: { title: item.title, time: item.time } })}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Button title="Pengaturan" onPress={() => router.push("/settings")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { backgroundColor: "#e0e0e0", padding: 10, marginVertical: 8, borderRadius: 8 },
  title: { fontSize: 16, fontWeight: "bold" },
});
