// App.js
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import Hint from "./src/screens/Hint";
import Correct from "./src/screens/Correct";
import Incorrect from "./src/screens/Incorrect";
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hint" component={Hint}/>
        <Stack.Screen name="Correct" component={Correct}/>
        <Stack.Screen name="Incorrect" component={Incorrect}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}