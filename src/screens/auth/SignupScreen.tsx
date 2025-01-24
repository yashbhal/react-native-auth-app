// src/screens/auth/SignupScreen.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import type { AuthNavigationProp } from "../../types/navigation.types";

const SignupScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        label="Confirm Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => console.log("Signup pressed")}
      >
        Sign Up
      </Button>
      <Button mode="text" onPress={() => navigation.navigate("Login")}>
        Already have an account? Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
    marginBottom: 8,
  },
});

export default SignupScreen;
