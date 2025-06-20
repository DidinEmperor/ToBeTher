import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ReminderDetail() {
  const { title, time } = useLocalSearchParams<{ title: string; time: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>Waktu: {time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
});
