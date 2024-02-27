import {FC, ReactNode} from 'react';
import {View} from 'react-native';
import {styles} from './TagWrapper.styled.ts';
import React from 'react';

type TagWrapperProps = {
  children: ReactNode;
};
export const TagWrapper: FC<TagWrapperProps> = ({children}) => (
  <View style={styles.container}>{children}</View>
);
