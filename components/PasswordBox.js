import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export default ({ password, features, lenght }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{password}</Text>
    </View>
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
