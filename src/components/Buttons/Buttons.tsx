import {View} from 'react-native';
import {next, previous} from '../../store/slices/tabSlice.ts';
import React, {FC} from 'react';
import {useAppDispatch} from '../../store';
import {Button} from '../Button';
import {styles} from './Button.styled.ts';

type ButtonsProps = {
  disabledPrevious?: boolean;
  disabledNext?: boolean;
};

export const Buttons: FC<ButtonsProps> = ({disabledPrevious, disabledNext}) => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Button
        disabled={disabledPrevious}
        label="previous"
        onPress={() => dispatch(previous())}
      />
      <Button
        disabled={disabledNext}
        label="next"
        onPress={() => dispatch(next())}
      />
    </View>
  );
};
