import {Button, Text, View} from 'react-native';
import {FC} from 'react';
import {Category as CategoryType} from '../../types';
import React from 'react';
import {useTagsSelector} from '../../store/selectors/tags.ts';
import {Pill} from '../Pill/Pill.tsx';
import {useAppDispatch} from '../../store';
import {Buttons} from '../Buttons/Buttons.tsx';
import {setTemporaryToggleTag} from '../../store/slices';
import {TagWrapper} from '../TagWrapper';
type CategoryProps = CategoryType & {};

export const Category: FC<CategoryProps> = ({id, label}) => {
  const dispatch = useAppDispatch();
  const tags = useTagsSelector();
  const filteredRags = tags.filter(t => t.categoryId === id);

  const isAnyoneTemporary = filteredRags.some(e => e.state === 'temporary');

  return (
    <View>
      <Text>{label}</Text>
      <TagWrapper>
        {filteredRags
          .filter(e => e.state !== 'saved')
          .map(props => (
            <Pill
              onPress={() => dispatch(setTemporaryToggleTag(props.id))}
              key={props.id}
              {...props}
            />
          ))}
      </TagWrapper>
      <Buttons disabledNext={!isAnyoneTemporary} />
    </View>
  );
};
