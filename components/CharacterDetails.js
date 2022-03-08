import { StyleSheet } from "react-native";
import Character from "../models/Character";
import { View, Text, TextInput, ScrollView } from "./Themed";
import { useState } from "react";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import CharacterTexts from "../constants/CharacterTexts";

export default function CharacterDetails({ route }) {
  let character = route.params;
  if (!character) {
    character = Character();
  }
  let [characterState, setCharacterState] = useState(character);
  let texts = CharacterTexts();

  return (
    <ScrollView>
      <View style={styles.characterContainer}>
        <Text>{characterState.name || ""}</Text>
        <TextInput
          style={styles.input}
          value={characterState.name}
          placeholder={texts.name}
          onChangeText={setCharacterState}
        />
        <Text>{characterState.level || ""}</Text>
        <TextInput
          style={styles.input}
          value={characterState.level}
          placeholder="Character level"
          onChangeText={setCharacterState}
        />
        <Text>{characterState.className || ""}</Text>
        <TextInput
          style={styles.input}
          value={characterState.className}
          placeholder="Character className"
          onChangeText={setCharacterState}
        />
        <Text>{characterState.subClassName || ""}</Text>
        <TextInput
          style={styles.input}
          value={characterState.subClassName}
          placeholder="Character subClassName"
          onChangeText={setCharacterState}
        />
        <Text>{characterState.creationDate || ""}</Text>
        <TextInput
          style={styles.input}
          value={characterState.creationDate}
          placeholder="Character creationDate"
          onChangeText={setCharacterState}
        />
        <Text>{characterState.updateDate || ""}</Text>
        <TextInput
          style={styles.input}
          value={characterState.updateDate}
          placeholder="Character updateDate"
          onChangeText={setCharacterState}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  characterContainer: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 26,
    // borderColor: Colors[colorScheme].tint,
    borderColor: '#e53306',
    borderWidth: 2,
    borderRadius: 6,
    marginBottom: 10,
  },
});
