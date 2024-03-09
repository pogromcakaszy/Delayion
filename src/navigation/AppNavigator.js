import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "../screens/HomeScreen";
import Credits from "../screens/CreditsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          unmountOnBlur: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#575757",
          tabBarActiveTintColor: "#FFFFFF",
          tabBarStyle: {
            height: 90,
            backgroundColor: "#111111",
            position: "absolute",
            overflow: "hidden",
            borderTopWidth: 0,
          },
          tabBarItemStyle: {
            margin: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bus" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Credits"
          component={Credits}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    //<ion-icon name="information-circle-outline"></ion-icon>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppNavigator;

/*

            <Stack.Navigator>
                <Stack.Screen
                    component={Home}
                    name="Home"
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>


*/
