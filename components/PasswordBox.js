import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import Clipboard from "expo-clipboard";

const width = Dimensions.get("window").width;

export default ({ password }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Clipboard.setString(password)}
    >
      <Text style={styles.text}>{password}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 50,
    backgroundColor: "#262848",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    marginVertical: 24,
    fontSize: 16,
    color: "#fdfdfd",
  },
});
