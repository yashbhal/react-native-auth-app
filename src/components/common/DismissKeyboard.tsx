// src/components/common/DismissKeyboard.tsx
import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import type { PropsWithChildren } from "react";

type DismissKeyboardProps = PropsWithChildren<{}>;

const DismissKeyboard = ({ children }: DismissKeyboardProps) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={{ flex: 1 }}>{children}</View>
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;
