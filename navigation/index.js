import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import CharacterDetails from "../components/CharacterDetails";
import CharacterListHeader from "../components/CharacterListHeader";
import Colors from "../constants/Colors.js";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabThreeScreen from "../screens/TabThreeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import LinkingConfiguration from "./LinkingConfiguration";


export default function Navigation({ colorScheme }) {
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
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" options={{ headerShown: false }}>
        {() => <BottomTabNavigator colorScheme={colorScheme} />}
      </Stack.Screen>

      <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetails}
          options={{
            headerStyle: { backgroundColor: Colors[colorScheme].background },
          }}
        />

        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>

        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{
            title: "Oops!",
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
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarItemStyle: { backgroundColor: Colors[colorScheme].background },
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }) => ({
          title: "Characters",
          headerStyle: {
            backgroundColor: Colors[colorScheme].background,
            borderBottomColor: Colors[colorScheme].tint,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerRight: () => <CharacterListHeader navigation={navigation} />,
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
