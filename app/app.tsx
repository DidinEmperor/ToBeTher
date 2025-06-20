import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screen/HomeScreen";
import AddReminderScreen from "./screens/AddReminderScreen";
import ReminderDetailScreen from "./screens/ReminderDetailScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { Reminder } from "./types/reminder";

export type RootStackParamList = {
  Home: undefined;
  AddReminder: undefined;
  ReminderDetail: { reminder: Reminder };
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddReminder" component={AddReminderScreen} />
        <Stack.Screen name="ReminderDetail" component={ReminderDetailScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
