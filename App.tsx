// import React, { Component, useState, useEffect } from "react";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-url-polyfill/auto";
// import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
// import { Session } from "@supabase/supabase-js";

// import { supabase } from "./api/supabase";
// import Auth from "./components/Auth";
// import Account from "./components/Account";
import HomeScreen from "./pages/Home";
import ProfileScreen from "./pages/Profile";
import LoginForm from "./pages/LoginForm";
import articleScroll from "./pages/articleScroll";
import QuizScreen from "./pages/Quiz";
import resultsScreen from "./pages/QuizResult"

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="WikipediaArticle" component={WikipediaArticleScreen} options={{ title: 'Wikipedia Article' }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: 'Quiz' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;