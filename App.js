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
import Question_12 from "./src/screens/Question_12";
import Correct_12 from "./src/screens/Correct_12";
import Question_13 from "./src/screens/Question_13";
import Correct_13 from "./src/screens/Correct_13";
import Question_14 from "./src/screens/Question_14";
import Correct_14 from "./src/screens/Correct_14";
import Question_15 from "./src/screens/Question_15";
import Correct_15 from "./src/screens/Correct_15";
import Question_16 from "./src/screens/Question_16";
import Correct_16 from "./src/screens/Correct_16";
import Info1 from "./src/screens/Info1";
import Info2 from "./src/screens/Info2";
import Info3 from "./src/screens/Info3";
import Info4 from "./src/screens/Info4";
import Info5 from "./src/screens/Info5";
import Info6 from "./src/screens/Info6";
import Info7 from "./src/screens/Info7";
import Info8 from "./src/screens/Info8";
import Info9 from "./src/screens/Info9";
import Info10 from "./src/screens/Info10";
import Info11 from "./src/screens/Info11";
import StartPage from "./src/screens/StartPage";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Hint" component={Hint}/>
         <Stack.Screen name="Correct" component={Correct}/>
         <Stack.Screen name="Incorrect" component={Incorrect}/>
         <Stack.Screen name="Information" component={Information}/>
         <Stack.Screen name="StartPage" component={StartPage} />
         <Stack.Screen name="MainTabs" component={TabNavigator} />
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
        <Stack.Screen name="Question_12" component={Question_12}/>
        <Stack.Screen name="Correct_12" component={Correct_12}/>
        <Stack.Screen name="Question_13" component={Question_13}/>
        <Stack.Screen name="Correct_13" component={Correct_13}/>
        <Stack.Screen name="Question_14" component={Question_14}/>
        <Stack.Screen name="Correct_14" component={Correct_14}/>
        <Stack.Screen name="Question_15" component={Question_15}/>
        <Stack.Screen name="Correct_15" component={Correct_15}/>
        <Stack.Screen name="Question_16" component={Question_16}/>
        <Stack.Screen name="Correct_16" component={Correct_16}/>
        <Stack.Screen name="Info1" component={Info1}/>
        <Stack.Screen name="Info2" component={Info2}/>
        <Stack.Screen name="Info3" component={Info3}/>
        <Stack.Screen name="Info4" component={Info4}/>
        <Stack.Screen name="Info5" component={Info5}/>
        <Stack.Screen name="Info6" component={Info6}/>
        <Stack.Screen name="Info7" component={Info7}/>
        <Stack.Screen name="Info8" component={Info8}/>
        <Stack.Screen name="Info9" component={Info9}/>
        <Stack.Screen name="Info10" component={Info10}/>
        <Stack.Screen name="Info11" component={Info11}/>
      
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Puzzle" component={MainStack} options={{ headerShown: false }} />
      <Tab.Screen name="Information" component={Information} options={{ headerShown: false }}/>
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