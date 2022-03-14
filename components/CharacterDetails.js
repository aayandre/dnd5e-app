import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import { Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { saveCharacter } from "../app/reducer-character";
import CharacterTexts from "../constants/CharacterTexts";
import {
  classes as CharacterClasses,
  subClasses as CharacterSubClasses,
} from "../constants/CharacterClasses";
import Character from "../models/Character";
import { getCharacter } from "../services/character/CharacterService";
import { ScrollView, Text, TextInput, View } from "./Themed";

export default function CharacterDetails({ route }) {
  const dispatch = useDispatch();
  let character = route.params;

  if (!route.params) {
    character = Character();
  } else {
    character = getCharacter(route.params.characterId, true);
  }

  let texts = CharacterTexts();

  return (
    <Formik
      initialValues={character}
      onSubmit={(values) => {
        console.log(values);
        dispatch(saveCharacter(values));
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <ScrollView>
          <View style={styles.characterContainer}>
            <Text>{values.name || ""}</Text>
            <TextInput
              style={styles.input}
              value={values.name}
              placeholder={texts.name}
              onBlur={handleBlur("name")}
              onChangeText={handleChange("name")}
            />
            <Text>{values.level || ""}</Text>
            <TextInput
              style={styles.input}
              value={values.level}
              placeholder={texts.level}
              onBlur={handleBlur("level")}
              onChangeText={handleChange("level")}
            />
            <Text>{values.className || ""}</Text>
            <Picker
              selectedValue={values.className}
              onValueChange={handleChange("className")}
            >
              <ClassList />
            </Picker>

            <Text>{values.subClassName || ""}</Text>
            <Picker
              selectedValue={values.subClassName}
              onValueChange={handleChange("subClassName")}
            >
              <SubClassList selectedClass={values.className} />
            </Picker>
            <Button onPress={handleSubmit} title="Save" />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}

function ClassList() {
  return CharacterClasses.map((className, index) => (
    <Picker.Item label={className} value={className} key={index} />
  ));
}

function SubClassList({ selectedClass }) {
  if (selectedClass) {
    return CharacterSubClasses[selectedClass.toLowerCase()].map(
      (subClassName, index) => (
        <Picker.Item label={subClassName} value={subClassName} key={index} />
      )
    );
  } else {
    return <Picker.Item label="None" value="none" />;
  }
}

const styles = StyleSheet.create({
  characterContainer: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 26,
    // borderColor: Colors[colorScheme].tint,
    borderColor: "#e53306",
    borderWidth: 2,
    borderRadius: 6,
    marginBottom: 10,
  },
});
