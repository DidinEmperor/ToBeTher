import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  const clearData = async () => {
    await AsyncStorage.removeItem("reminders");
    Alert.alert("Berhasil", "Semua pengingat telah dihapus.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>
      <Button title="Hapus Semua Pengingat" onPress={clearData} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
});
