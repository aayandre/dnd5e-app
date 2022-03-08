import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable } from "react-native";

import LinkingConfiguration from "./LinkingConfiguration";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors.js";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import ModalScreen from "../screens/ModalScreen";
import TabThreeScreen from "../screens/TabThreeScreen";
import CharacterDetails from "../components/CharacterDetails";
import { View } from "../components/Themed";

export default function Navigation({ colorScheme }) {
  console.log("Navigation colorScheme: ", colorScheme);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme == "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator colorScheme={colorScheme} />
    </NavigationContainer>
  );
}

/**
 * A root stach navigator is often used for displaying modals on top of all
 * other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator({ colorScheme }) {
  console.log("RootNavigator colorScheme: ", colorScheme);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={() => <BottomTabNavigator colorScheme={colorScheme} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          presentation: "fullScreenModal",
        }}
      >
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetails}
          options={{
            headerStyle: { backgroundColor: Colors[colorScheme].background },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of display to
 * switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator({ colorScheme }) {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }) => ({
          title: "Tab One",
          headerStyle: {
            backgroundColor: Colors[colorScheme].background,
            borderBottomColor: Colors[colorScheme].tint,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <View>
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={(pressed) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          title: "Tab Three",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at
 * https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
