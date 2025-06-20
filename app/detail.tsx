import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function DetailReminder() {
  const { title, time } = useLocalSearchParams();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
      <Text>Waktu: {time}</Text>
    </View>
  );
}
