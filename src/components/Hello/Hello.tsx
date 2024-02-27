import {Text, View} from 'react-native';
import {Buttons} from '../Buttons/Buttons.tsx';
import React, {FC} from 'react';

type HelloProps = {
  title: string;
};

export const Hello: FC<HelloProps> = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Buttons disabledPrevious />
    </View>
  );
};
