import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryMealsScreen = (Props) => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMeals Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;