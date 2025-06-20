import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { Reminder } from "../types/reminder";

export default function AddReminder() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const router = useRouter();

  // ✅ Minta izin notifikasi
  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Izin Notifikasi", "Izin diperlukan untuk mengirim notifikasi.");
      }
    };
    requestPermission();
  }, []);

  const saveReminder = async () => {
    if (!title || !time) {
      Alert.alert("Input Kosong", "Judul dan waktu harus diisi!");
      return;
    }

    const newReminder: Reminder = {
      id: uuidv4(),
      title,
      time,
    };

    try {
      // ✅ Simpan ke AsyncStorage
      const existing = await AsyncStorage.getItem("reminders");
      const list = existing ? JSON.parse(existing) : [];
      list.push(newReminder);
      await AsyncStorage.setItem("reminders", JSON.stringify(list));

      // ✅ Kirim notifikasi langsung (bukan dijadwalkan)
      await Notifications.presentNotificationAsync({
        title: "Pengingat Ditambahkan",
        body: `Ingat untuk: ${title} pada ${time}`,
      });

      Alert.alert("Berhasil", "Pengingat berhasil disimpan!");
      router.back();
    } catch (error) {
      console.error("Gagal menyimpan pengingat:", error);
      Alert.alert("Error", "Gagal menyimpan pengingat.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Judul Pengingat" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Waktu (contoh: 07:30)" value={time} onChangeText={setTime} keyboardType="numeric" style={styles.input} />
      <Button title="Simpan" onPress={saveReminder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
