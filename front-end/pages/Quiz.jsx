import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { supabase } from "../api/supabase";
import { useNavigation } from "@react-navigation/native";

const QuizScreen = () => {
  const [quiz, setQuiz] = useState([]);
  const [cur, setCur] = useState(0);
  const [question, setQuestion] = useState([]);
  const [score, setScore] = useState(0);

  const navigation = useNavigation();

  const fetchQuestions = async () => {
    let result;
    try {
      result = await supabase
        .from("Content")
        .select(`quiz`)
        .eq(`title`, `The Grands Boulevards`); // TODO: hardcoded

      let quiz = JSON.parse(result?.data?.[0]?.quiz);
      quiz = quiz?.questions;
      setQuiz(quiz);
      setQuestion(quiz?.[0]);
      setCur(() => cur + 1);
      console.log("Quiz loaded.");
    } catch (error) {
      throw "Failed to fetch questions.";
    }
  };

  const handleAnswer = (answer) => {
    const isCorrect = answer === "correct answer"; // TODO: hardcoded
    if (isCorrect) {
      setScore(score + 20);
    }
    if (cur === quiz.length) {
      navigation.navigate("QuizResult", { score: score });
    }
    setQuestion(quiz?.[cur]);
    setCur(() => cur + 1);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.moduleText}>Module Quiz</Text>
      <View style={styles.quizContainer}>
        <Text style={styles.questionText}>{question?.question}</Text>

        {question?.options?.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444444",
    alignItems: "center",
    justifyContent: "center",
  },
  moduleText: {
    color: "#CCCCCC",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
  },
  quizContainer: {
    padding: 16,
    backgroundColor: "#444444",
    borderRadius: 8,
    marginBottom: 16,
    width: "80%",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff",
  },
  optionButton: {
    backgroundColor: "#666666",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  scoreContainer: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  scoreText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default QuizScreen;
