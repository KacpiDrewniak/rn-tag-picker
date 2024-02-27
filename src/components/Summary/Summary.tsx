import {Text, View} from 'react-native';
import {Button} from '../Button';
import {useAppDispatch, useAppSelector} from '../../store';
import {TagWrapper} from '../TagWrapper';
import {Pill} from '../Pill';
import React from 'react';
import {previous, reset} from '../../store';
import {saveTags} from '../../store';
export const Summary = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector(state => state.tags.tags);

  const handleSave = () => {
    dispatch(saveTags());
    dispatch(reset());
  };

  return (
    <View>
      <Text>Czy zapisac wybrane tagi?</Text>
      <TagWrapper>
        {tags
          .filter(e => e.state === 'temporary')
          .map(props => (
            <Pill key={props.id} {...props} />
          ))}
      </TagWrapper>
      <Button label="Cofnij" onPress={() => dispatch(previous())} />
      <Button label="Zapisz tagi" onPress={handleSave} />
    </View>
  );
};
