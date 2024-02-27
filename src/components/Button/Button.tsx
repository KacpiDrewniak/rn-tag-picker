import {FC} from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Button.styled.ts';
type ButtonProps = {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({label, onPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, disabled && styles.disabled]}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
