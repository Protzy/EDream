import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const QuizResult = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Quiz Over!</Text>
      <Text style={styles.description}>
        {" "}
        Your score is: {route.params.score}{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: "gray",
  },
});

export default QuizResult;