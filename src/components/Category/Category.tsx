import {Alert, Text, View} from 'react-native';
import {FC} from 'react';
import {Category as CategoryType} from '../../types';
import React from 'react';
import {useTagsSelector} from '../../store/selectors/tags.ts';
import {Pill} from '../Pill';
import {next, previous, useAppDispatch} from '../../store';

import {setTemporaryToggleTag} from '../../store';
import {TagWrapper} from '../TagWrapper';
import {Button} from '../Button';
import {Buttons} from '../Buttons/Buttons.tsx';
type CategoryProps = CategoryType & {};

export const Category: FC<CategoryProps> = ({id, label}) => {
  const dispatch = useAppDispatch();
  const tags = useTagsSelector();
  const filteredRags = tags.filter(t => t.categoryId === id);

  const isAnyoneTemporary = filteredRags.some(e => e.state === 'temporary');

  const handleSet = (
    id: string,
    isLevel: boolean,
    state?: 'saved' | 'temporary',
  ) => {
    if (isLevel && state !== 'temporary') {
      Alert.alert('Wybierz poziom', '', [
        {
          text: '1',
          onPress: () => dispatch(setTemporaryToggleTag({id, level: 1})),
        },
        {
          text: '2',
          onPress: () => dispatch(setTemporaryToggleTag({id, level: 2})),
        },
        {
          text: '3',
          onPress: () => dispatch(setTemporaryToggleTag({id, level: 2})),
        },
        {
          text: 'cancel',
        },
      ]);
    } else {
      dispatch(setTemporaryToggleTag({id}));
    }
  };

  return (
    <View>
      <Text>{label}</Text>
      <TagWrapper>
        {filteredRags
          .filter(e => e.state !== 'saved')
          .map(props => (
            <Pill
              onPress={() => handleSet(props.id, props.isLevel, props.state)}
              key={props.id}
              {...props}
            />
          ))}
      </TagWrapper>
      <Buttons disabledNext={!isAnyoneTemporary} />
    </View>
  );
};
