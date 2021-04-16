import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PasswordBox from "./components/PasswordBox";
import LenghtManager from "./components/LenghtManager";
import Button from "./components/Button";
import Settings from "./components/Settings";

export default function App() {
  const initialValue = 16;
  const [lenght, setLenght] = useState(initialValue);
  const [isUpper, setIsUpper] = useState(true);
  const [isLower, setIsLower] = useState(true);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [password, setPassword] = useState("GENERATE CLICK");
  const features = {
    uppercase: isUpper,
    lowercase: isLower,
    nuwbers: isNumber,
    symbols: isSymbol,
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Password Generator</Text>
      <PasswordBox password={password} />
      <LenghtManager
        setLenght={setLenght}
        lenght={lenght}
        initialValue={initialValue}
      />
      <Settings
        isUpper={isUpper}
        isLower={isLower}
        isNumber={isNumber}
        isSymbol={isSymbol}
        setIsUpper={setIsUpper}
        setIsLower={setIsLower}
        setIsNumber={setIsNumber}
        setIsSymbol={setIsSymbol}
      />
      <Button setPassword={setPassword} features={features} lenght={lenght} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120c2a",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginLeft: 15,
    alignSelf: "stretch",
    marginVertical: 42,
    fontSize: 28,
    color: "#fdfdfd",
  },
});
