import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Button, Text, View } from "react-native";

export default function Settings() {
  const clear = async () => {
    await AsyncStorage.removeItem("reminders");
    Alert.alert("Data dihapus", "Semua pengingat berhasil dihapus.");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Pengaturan</Text>
      <Button title="Hapus Semua Pengingat" onPress={clear} color="red" />
    </View>
  );
}
