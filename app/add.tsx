import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { v4 as uuidv4 } from "uuid";

export default function AddReminder() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const save = async () => {
    const newReminder = { id: uuidv4(), title, time };
    const data = await AsyncStorage.getItem("reminders");
    const list = data ? JSON.parse(data) : [];
    list.push(newReminder);
    await AsyncStorage.setItem("reminders", JSON.stringify(list));
    router.back();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Judul" value={title} onChangeText={setTitle} style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Waktu (hh:mm)" value={time} onChangeText={setTime} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Simpan" onPress={save} />
    </View>
  );
}
