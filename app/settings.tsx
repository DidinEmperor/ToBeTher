import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  const clearAllReminders = async () => {
    await AsyncStorage.removeItem("reminders");
    Alert.alert("Selesai", "Semua pengingat telah dihapus.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>
      <Button
        title="Hapus Semua Pengingat"
        color="red"
        onPress={clearAllReminders}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
