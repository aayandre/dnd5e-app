import { useNavigation } from "@react-navigation/native";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { View, Text } from "../components/Themed";

import { listCharacters } from "../services/character/CharacterListService";

function CharacterBox({ character, navigation }) {
  const { name, level, cClass, subclass, creationDate, updateDate } = character;

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("CharacterDetails", character)}
      onLongPress={() => console.log("clique longo")}
      underlayColor="grey"
      style={styles.touchable}
    >
      <View style={styles.listItens}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{level}</Text>
        <Text style={styles.text}>{cClass}</Text>
        <Text style={styles.text}>{subclass}</Text>
        <Text style={styles.text}>{creationDate}</Text>
        <Text style={styles.text}>{updateDate}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default function CharacterList() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.listContainer}>{loadCharacters(navigation)}</View>
    </ScrollView>
  );
}

function loadCharacters(navigation) {
  const characters = listCharacters(null, true);

  if (characters) {
    return characters.map((character, i) => {
      return (
        <CharacterBox character={character} navigation={navigation} key={i} />
      );
    });
  } else {
    // return <Text>Click here to create a new Character.</Text>;

    return (
      <Pressable
        style={styles.noCharacters}
        onPress={() => navigation.navigate("CharacterDetails")}
      >
        <Text>Click here to create a new Character.</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  scroll: {
    width: "100%",
    marginVertical: 10,
  },
  touchable: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
    borderRadius: "6px",
  },
  listItens: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    borderWidth: "2px",
    borderColor: "red",
    borderRadius: "6px",
  },
  text: {
    color: "white",
    padding: 10,
    marginRight: 5,
  },
  noCharacters: {
    color: "white",
    padding: 10,
    fontSize: 20,
  },
});
