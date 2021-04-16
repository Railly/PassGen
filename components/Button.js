import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getPassword } from "../utils/getPassword";

const width = Dimensions.get("window").width;

export default ({ setPassword, features, lenght }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setPassword(getPassword(lenght, features))}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#7e7aee", "#7774dd", "#7e63c1"]}
        style={styles.linearGradient}
      >
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: width - 50,
    marginVertical: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 10,
  },
});
