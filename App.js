import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// REALM
import { RealmProvider } from "./app/models/Project";
// SCREENS
import { HomeScreen } from "./app/HomeScreen";
import { ProjectScreen } from "./app/ProjectScreen";
import Leite from "./src/pages/Leite";

const Stack = createNativeStackNavigator();
function AppWrapper() {
  return (
    <RealmProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Leite">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Projects" component={ProjectScreen} />
          <Stack.Screen name="Leite" component={Leite} />
        </Stack.Navigator>
      </NavigationContainer>
    </RealmProvider>
  );
}

export default AppWrapper;
