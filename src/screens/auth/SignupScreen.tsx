// src/screens/auth/SignupScreen.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import DismissKeyboard from "../../components/common/DismissKeyboard";
import { colors } from "../../theme/colors";
import type { AuthNavigationProp } from "../../types/navigation.types";

const SignupScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        {/* Email Input */}
        <TextInput
          label="Email"
          mode="outlined"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          theme={{ colors: { primary: colors.primary } }}
        />

        {/* Password Input */}
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          theme={{ colors: { primary: colors.primary } }}
        />

        {/* Confirm Password Input */}
        <TextInput
          label="Confirm Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          theme={{ colors: { primary: colors.primary } }}
        />

        {/* Sign Up Button */}
        <Button
          mode="contained"
          style={styles.button}
          buttonColor={colors.primary}
        >
          Sign Up
        </Button>

        {/* Login Link */}
        <Button
          mode="text"
          onPress={() => navigation.navigate("Login")}
          textColor={colors.secondary}
        >
          Already have an account? Login
        </Button>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  input: {
    marginBottom: 16,
    backgroundColor: colors.surface,
  },
  button: {
    marginTop: 24,
    marginBottom: 12,
    paddingVertical: 6,
  },
});

export default SignupScreen;
