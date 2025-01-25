// src/screens/auth/SignupScreen.tsx
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput, HelperText } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DismissKeyboard from "../../components/common/DismissKeyboard";
import { colors } from "../../theme/colors";
import {
  signupSchema,
  type SignupFormData,
} from "../../validation/auth.schema";
import { useAuthStore } from "../../store/auth.store";
import type { AuthNavigationProp } from "../../types/navigation.types";

/**
 * SignupScreen Component
 * Handles new user registration with email and password
 */
const SignupScreen = () => {
  // Local state for password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // Navigation setup
  const navigation = useNavigation<AuthNavigationProp>();

  // Auth store values
  const login = useAuthStore((state) => state.login);
  const setLoading = useAuthStore((state) => state.setLoading);
  const isLoading = useAuthStore((state) => state.isLoading);

  // Form setup
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Watch password for real-time validation
  const password = watch("password");

  /**
   * Handle form submission
   * @param data - Form data containing email, password, and confirmPassword
   */
  const onSubmit = async (data: SignupFormData) => {
    try {
      console.log("Signup attempt:", { email: data.email });
      setLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockUser = {
        id: Date.now().toString(),
        email: data.email,
      };

      console.log("Signup successful:", { email: data.email });
      login(mockUser, "mock-jwt-token-" + Date.now());
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        {/* Email Input */}
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value, onBlur } }) => (
            <>
              <TextInput
                label="Email"
                mode="outlined"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                theme={{ colors: { primary: colors.primary } }}
                error={!!errors.email}
                disabled={isLoading}
                left={<TextInput.Icon icon="email" />}
              />
              <HelperText type="error" visible={!!errors.email}>
                {errors.email?.message}
              </HelperText>
            </>
          )}
        />

        {/* Password Input */}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value, onBlur } }) => (
            <>
              <TextInput
                label="Password"
                mode="outlined"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={!passwordVisible}
                style={styles.input}
                theme={{ colors: { primary: colors.primary } }}
                error={!!errors.password}
                disabled={isLoading}
                left={<TextInput.Icon icon="lock" />}
                right={
                  <TextInput.Icon
                    icon={passwordVisible ? "eye-off" : "eye"}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  />
                }
              />
              <HelperText type="error" visible={!!errors.password}>
                {errors.password?.message}
              </HelperText>
            </>
          )}
        />

        {/* Confirm Password Input */}
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value, onBlur } }) => (
            <>
              <TextInput
                label="Confirm Password"
                mode="outlined"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={!confirmPasswordVisible}
                style={styles.input}
                theme={{ colors: { primary: colors.primary } }}
                error={!!errors.confirmPassword}
                disabled={isLoading}
                left={<TextInput.Icon icon="lock-check" />}
                right={
                  <TextInput.Icon
                    icon={confirmPasswordVisible ? "eye-off" : "eye"}
                    onPress={() =>
                      setConfirmPasswordVisible(!confirmPasswordVisible)
                    }
                  />
                }
              />
              <HelperText type="error" visible={!!errors.confirmPassword}>
                {errors.confirmPassword?.message}
              </HelperText>
            </>
          )}
        />

        {/* Signup Button */}
        <Button
          mode="contained"
          style={styles.button}
          buttonColor={colors.primary}
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : "Sign Up"}
        </Button>

        {/* Login Navigation */}
        <Button
          mode="text"
          onPress={() => navigation.navigate("Login")}
          textColor={colors.secondary}
          disabled={isLoading}
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
    marginBottom: 4,
    backgroundColor: colors.surface,
  },
  button: {
    marginTop: 24,
    marginBottom: 12,
    paddingVertical: 6,
  },
});

export default SignupScreen;
