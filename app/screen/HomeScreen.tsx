import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../app";
import { Reminder } from "../types/reminder";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    const loadReminders = async () => {
      const data = await AsyncStorage.getItem("reminders");
      if (data) setReminders(JSON.parse(data));
    };
    const unsubscribe = navigation.addListener("focus", loadReminders);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button title="Tambah Pengingat" onPress={() => navigation.navigate("AddReminder")} />
      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("ReminderDetail", { reminder: item })}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Button title="Pengaturan" onPress={() => navigation.navigate("Settings")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 10, marginVertical: 8, backgroundColor: "#e0e0e0", borderRadius: 8 },
  title: { fontSize: 16, fontWeight: "bold" },
});
