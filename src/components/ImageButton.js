import { StyleSheet, Text, View, Pressable } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import colors from '../constants/colors';
export const ImageButton = ({
  label,
  icon,
fun=() => console.log("clicked"), disabled}) =>  {
  
    return (
      <Pressable 
        style={({pressed})=>(pressed?{opacity:0.5}:{}) } 
          onPress={fun}
        disabled={disabled} >
        <View style={styles.container} >
          <Ionicons name={icon} size={20} color='white'/>
          <Text style={styles.text}>{label}</Text> 
        </View>
      </Pressable>
      
    );
  }
  
  const styles = StyleSheet.create({ 
    container: {
        //width: 100,
        height: 30,
        borderWidth: 1,
        borderColor: colors.border,   
        backgroundColor: 'royalblue',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems:'center'
        
      },
      text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
      },

  })