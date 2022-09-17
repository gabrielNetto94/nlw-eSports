import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface ButtonProps {
  title: string;
}

function Button({title}: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      
      <Button title="Teste"></Button>
      <Button title="Teste"></Button>
      <StatusBar style="auto" />
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
    fontSize: 22,
    color: "purple",
    backgroundColor:"#00ff00"
  },
});
