import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { View } from "./Themed";

export default function CharacterListHeader({ navigation }) {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.buttonsContainer}>
      <Pressable
        onPress={() => navigation.navigate("CharacterDetails")}
        style={(pressed) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <FontAwesome
          name="plus"
          size={25}
          color={Colors[colorScheme].text}
          style={{ marginRight: 15 }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    // flex: 2,
  },
});
