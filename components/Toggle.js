import React, { useState } from "react";
import { View, StyleSheet, Switch, Text, Dimensions } from "react-native";

export default ({ feature, isProperty, setProperty }) => {
  const toggleSwitch = () => setProperty((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Include {feature}</Text>
      <Switch
        trackColor={{ false: "#fff", true: "#6d67e4" }}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#8c8c8a"
        onValueChange={toggleSwitch}
        value={isProperty}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width - 50,
    paddingHorizontal: 50,
    marginVertical: 10,
    backgroundColor: "#262848",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: "#fdfdfd",
  },
});
