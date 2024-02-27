import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import {FC} from 'react';
import {Tag} from '../../types';
import {styles} from './Pill.styled.ts';
import React from 'react';
export const Pill: FC<
  Tag & {onPress?: (event: GestureResponderEvent) => void}
> = ({label, state, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        state === 'temporary' && styles.temporary,
        state === 'saved' && styles.saved,
      ]}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};
