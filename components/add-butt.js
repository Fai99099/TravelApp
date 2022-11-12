import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const AddButton = (props) => {
  const { buttonText, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.addBtt}>
        <Text style={styles.buttText}>{buttonText ? buttonText : "ADD"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addBtt: {
    backgroundColor: "rgba(120, 181, 204, 0.9)",
    borderRadius: 20,
    marginLeft: 100,
    paddingVertical: 10,
    //display:"flex",
    alignItems: "center",
    width: 200,
  },
  buttText: {
    color: "white",
    fontWeight: "600",
    fontSize: 26,
  },
});
