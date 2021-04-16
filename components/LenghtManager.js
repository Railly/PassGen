import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Slider from "@react-native-community/slider";

const width = Dimensions.get("window").width;

export default ({ setLenght, lenght, initialValue }) => {
  const minValue = 4;
  const maxValue = 32;
  return (
    <>
      <Text style={styles.section}>
        LENGHT: {<Text style={styles.text}>{lenght}</Text>}
      </Text>
      <View style={styles.container}>
        <Text style={styles.text}>{minValue}</Text>
        <Slider
          style={{ width: width - width / 3.5, height: 40 }}
          minimumValue={minValue}
          maximumValue={maxValue}
          value={initialValue}
          minimumTrackTintColor="#0711b2"
          maximumTrackTintColor="#8c8c8a"
          onValueChange={(x) => setLenght(x)}
          step={1}
        />
        <Text style={styles.text}>{maxValue}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 50,
    marginVertical: 10,
    backgroundColor: "#262848",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    marginHorizontal: width / 60,
    color: "#fdfdfd",
  },
  section: {
    alignSelf: "stretch",
    fontSize: 16,
    marginHorizontal: 30,
    color: "#909090",
  },
});
