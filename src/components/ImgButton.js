import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionions } from "@expo/vector-icons";

export const ImgButton = ({
  name,
  label,
  fun = () => {
    console.log("I am clicked");
  },
}) => {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? { opacity: 0.5 } : {})}
      onPress={fun}
    >
      <View style={styles.container}>
        <Ionicons name={name} color="white" size={20} />
        <Text style={styles.text}>{label}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 30,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});