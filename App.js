import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cejam Reminder!</Text>
      <Text style={styles.participants}>
        <Text style={styles.bold}>EMMY</Text> = Ellen, Maria, Murilo, Yuri
      </Text>
      <StatusBar style="auto" />
      <Text style={styles.left}>
        Para começar, acesse uma branch: {"\n"}git checkout -b seu_nome
      </Text>
      <Text style={[styles.bold]}>
        {"\n"}
        EXEMPLO:{"\n"} git checkout -b ellen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "darkblue",
  },
  participants: {
    fontSize: 20,
    paddingBottom: 16,
  },
  left: {
    textAlign: "left",
  },
  bold: {
    fontWeight: "bold",
  },
});
