// src/screens/auth/LoginScreen.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import DismissKeyboard from "../../components/common/DismissKeyboard";
import { colors } from "../../theme/colors";
import type { AuthNavigationProp } from "../../types/navigation.types";

const LoginScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <TextInput
          label="Email"
          mode="outlined"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          theme={{ colors: { primary: colors.primary } }}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          theme={{ colors: { primary: colors.primary } }}
        />
        <Button
          mode="contained"
          style={styles.button}
          buttonColor={colors.primary}
        >
          Login
        </Button>
        <Button
          mode="text"
          onPress={() => navigation.navigate("Signup")}
          textColor={colors.secondary}
        >
          Need an account? Sign up
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

export default LoginScreen;
