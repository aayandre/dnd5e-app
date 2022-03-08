import { StyleSheet } from "react-native";
import CharacterList from "../components/CharacterList";
import { View } from "../components/Themed";

export default function TabOneScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CharacterList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
