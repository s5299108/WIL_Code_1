// App.js
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import Hint from "./src/screens/Hint";
import Correct from "./src/screens/Correct";
import Incorrect from "./src/screens/Incorrect";
import Information from "./src/screens/Information";
import Information_2 from "./src/screens/Information_2";
import Question_1 from "./src/screens/Question_1";
import Question_2 from "./src/screens/Question_2";
import Correct_2 from "./src/screens/Correct_2";
import Question_3 from "./src/screens/Question_3";
import Correct_3 from "./src/screens/Correct_3";
import Question_4 from "./src/screens/Question_4";
import Correct_4 from "./src/screens/Correct_4";
import Question_5 from "./src/screens/Question_5";
import Correct_5 from "./src/screens/Correct_5";
import question_6 from "./src/screens/question_6";
import correct_6 from "./src/screens/correct_6";
import question_7 from "./src/screens/question_7";
import correct_7 from "./src/screens/correct_7";
import question_8 from "./src/screens/question_8";
import correct_8 from "./src/screens/correct_8";
import question_9 from "./src/screens/question_9";
import correct_9 from "./src/screens/correct_9";
import question_10 from "./src/screens/question_10";
import correct_10 from "./src/screens/correct_10";
import Question_11 from "./src/screens/Question_11";
import correct_11 from "./src/screens/correct_11";

import StartPage from "./src/screens/StartPage";
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Hint" component={Hint}/>
         <Stack.Screen name="Correct" component={Correct}/>
         <Stack.Screen name="Incorrect" component={Incorrect}/>
         <Stack.Screen name="Information" component={Information}/>
         <Stack.Screen name="StartPage" component={StartPage} />
         <Stack.Screen name="MainTabs" component={TabNavigator} />
         <Stack.Screen name="Information_2" component={Information_2}/>
         <Stack.Screen name="Question_1" component={Question_1}/>
         <Stack.Screen name="Question_2" component={Question_2}/>
         <Stack.Screen name="Correct_2" component={Correct_2}/>
        <Stack.Screen name="Question_3" component={Question_3}/>
         <Stack.Screen name="Correct_3" component={Correct_3}/>
         <Stack.Screen name="Question_4" component={Question_4}/>
         <Stack.Screen name="Correct_4" component={Correct_4}/>
         <Stack.Screen name="Question_5" component={Question_5}/>
         <Stack.Screen name="Correct_5" component={Correct_5}/>
         <Stack.Screen name="question_6" component={question_6}/>
        <Stack.Screen name="correct_6" component={correct_6}/>
        <Stack.Screen name="question_7" component={question_7}/>
        <Stack.Screen name="correct_7" component={correct_7}/>
        <Stack.Screen name="question_8" component={question_8}/>
        <Stack.Screen name="correct_8" component={correct_8}/>
        <Stack.Screen name="question_9" component={question_9}/>
        <Stack.Screen name="correct_9" component={correct_9}/>
        <Stack.Screen name="question_10" component={question_10}/>
        <Stack.Screen name="correct_10" component={correct_10}/>
        <Stack.Screen name="Question_11" component={Question_11}/>
        <Stack.Screen name="correct_11" component={correct_11}/>
      
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Puzzle" component={MainStack} options={{ headerShown: false }} />
      <Tab.Screen name="Information" component={Information} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage">
        <Stack.Screen
          name="StartPage"
          component={StartPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}