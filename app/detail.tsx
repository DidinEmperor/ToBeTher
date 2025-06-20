import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function DetailScreen() {
  const { title, time } = useLocalSearchParams(); // ambil data dari parameter URL
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Judul:</Text>
      <Text style={styles.text}>{title}</Text>

      <Text style={styles.label}>Waktu:</Text>
      <Text style={styles.text}>{time}</Text>

      <Button title="Kembali" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
