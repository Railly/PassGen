import React from "react";
import Toggle from "./Toggle";
import { View, Text, StyleSheet } from "react-native";

export default (props) => {
  return (
    <>
      <Text style={styles.section}>SETTINGS</Text>
      <Toggle
        feature="Uppercase"
        setProperty={props.setIsUpper}
        isProperty={props.isUpper}
      />
      <Toggle
        feature="Lowercase"
        setProperty={props.setIsLower}
        isProperty={props.isLower}
      />
      <Toggle
        feature="Numbers"
        setProperty={props.setIsNumber}
        isProperty={props.isNumber}
      />
      <Toggle
        feature="Symbols"
        setProperty={props.setIsSymbol}
        isProperty={props.isSymbol}
      />
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    alignSelf: "stretch",
    fontSize: 16,
    marginHorizontal: 30,
    color: "#909090",
  },
});
