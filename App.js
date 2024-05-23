// App.js
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import Hint from "./src/screens/Hint";
import Correct from "./src/screens/Correct";
import Incorrect from "./src/screens/Incorrect";
import Information from "./src/screens/Information";
import Information_2 from "./src/screens/Information_2";
import Question_2 from "./src/screens/Question_2";
import Correct_2 from "./src/screens/Correct_2";
import Question_3 from "./src/screens/Question_3";
import Correct_3 from "./src/screens/Correct_3";
import Question_4 from "./src/screens/Question_4";
import Correct_4 from "./src/screens/Correct_4";
import Question_5 from "./src/screens/Question_5";
import Correct_5 from "./src/screens/Correct_5";
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Information">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hint" component={Hint}/>
        <Stack.Screen name="Correct" component={Correct}/>
        <Stack.Screen name="Incorrect" component={Incorrect}/>
        <Stack.Screen name="Information" component={Information}/>
        <Stack.Screen name="Information_2" component={Information_2}/>
        <Stack.Screen name="Question_2" component={Question_2}/>
        <Stack.Screen name="Correct_2" component={Correct_2}/>
        <Stack.Screen name="Question_3" component={Question_3}/>
        <Stack.Screen name="Correct_3" component={Correct_3}/>
        <Stack.Screen name="Question_4" component={Question_4}/>
        <Stack.Screen name="Correct_4" component={Correct_4}/>
        <Stack.Screen name="Question_5" component={Question_5}/>
        <Stack.Screen name="Correct_5" component={Correct_5}/>
        {/* <Stack.Screen name="Correct_4" component={Correct_4}/>
        <Stack.Screen name="Question_5" component={Question_5}/>
        <Stack.Screen name="Correct_5" component={Correct_5}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}