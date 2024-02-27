import {Alert, View} from 'react-native';
import {next, previous, useAppDispatch} from '../../store';
import React, {FC} from 'react';
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
        label="next"
        onPress={() =>
          disabledNext
            ? Alert.alert(
                'Nie mozesz przejsc dalej wybierz conajmniej jedną opcje',
              )
            : dispatch(next())
        }
      />
    </View>
  );
};
