// src/screens/auth/SignupScreen.tsx
import React from "react";
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
import type { AuthNavigationProp } from "../../types/navigation.types";

const SignupScreen = () => {
  // Navigation setup
  const navigation = useNavigation<AuthNavigationProp>();

  // Form setup with React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Form submission handler
  const onSubmit = async (data: SignupFormData) => {
    try {
      console.log("Signup form submitted:", data);
      // add actual signup logic
    } catch (error) {
      console.error("Signup error:", error);
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
                secureTextEntry
                style={styles.input}
                theme={{ colors: { primary: colors.primary } }}
                error={!!errors.password}
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
                secureTextEntry
                style={styles.input}
                theme={{ colors: { primary: colors.primary } }}
                error={!!errors.confirmPassword}
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
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating Account..." : "Sign Up"}
        </Button>

        {/* Login Navigation Button */}
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
