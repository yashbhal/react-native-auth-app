// src/components/common/DismissKeyboard.tsx
import React from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';

interface DismissKeyboardProps {
  children: React.ReactNode; // Replace {} with proper type
}

const DismissKeyboard: React.FC<DismissKeyboardProps> = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>{children}</View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DismissKeyboard;
