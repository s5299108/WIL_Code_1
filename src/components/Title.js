
import { StyleSheet, Text, View } from 'react-native';


export const Title = ({titleval}) =>  {
  
  return (
    <View style={styles.titlebox}>
        <Text style={styles.title}>{titleval}</Text>
      </View>
    
  );
}

const styles = StyleSheet.create({ 

    titlebox: {
        width: 350,
        height: 40,
        borderWidth:2,
        borderColor: "blue",
        backgroundColor: "blue",
        borderRadius: 4,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        alignContent: "center",
       marginTop: 30,
       
      },
      title:{
        fontSize: 20,
        fontWeight: 'bold',
        color:"white",
        alignContent:'center',
        marginVertical:4.5,
        justifyContent: "center",
      }
      
})