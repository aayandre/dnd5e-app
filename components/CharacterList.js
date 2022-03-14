import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadCharacters, resetCharacters } from "../app/reducer-character";
import { Text, View } from "../components/Themed";

export default function CharacterList() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setAppState({
  //     ...AppState,
  //     characters: listCharacters({ localstorage: true }, false),
  //   });
  // }, []);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.listContainer}>
        <Characters navigation={navigation} />
      </View>
      <Button onPress={() => dispatch(resetCharacters())} title="RESET" />
    </ScrollView>
  );
}

function CharacterBox({ character, navigation }) {
  const { name, level, className, subClassName, creationDate, updateDate } =
    character;

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
        <Text style={styles.text}>{className}</Text>
        <Text style={styles.text}>{subClassName}</Text>
        <Text style={styles.text}>{creationDate}</Text>
        <Text style={styles.text}>{updateDate}</Text>
      </View>
    </TouchableHighlight>
  );
}

function Characters({ navigation }) {
  console.log("loadCharacters init");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCharacters());
  }, []);

  const characters = useSelector((state) => state.character.characters);

  if (characters) {
    return characters.map((character, i) => {
      return (
        <CharacterBox character={character} navigation={navigation} key={i} />
      );
    });
  } else {
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
    padding: 10,
    marginRight: 5,
  },
  noCharacters: {
    padding: 10,
    fontSize: 20,
  },
});
