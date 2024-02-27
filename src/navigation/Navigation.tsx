import {SafeAreaView, Text, View} from 'react-native';
import {useEffect, useMemo} from 'react';
import React from 'react';
import {categories} from '../../__mocks__';
import {Category} from '../components/Category/Category.tsx';
import {useAppDispatch, useAppSelector} from '../store';
import {loadTags} from '../store/slices';
import {actionGetTags} from '../action/action.getTags.ts';
import * as Progress from 'react-native-progress';
import {width} from '../hooks/useDimentions.ts';
import {Summary} from '../components/Summary';
import {Hello} from '../components/Hello';
import {TagWrapper} from '../components/TagWrapper';
import {Pill} from '../components/Pill/Pill.tsx';
import {useTab} from '../store/selectors/tabs.ts';
import {useTagsSelector} from '../store/selectors/tags.ts';
import {styles} from './Navigation.styled.ts';

const content = [
  <Hello title="Cześć, w kolejnych krokach powiedz nam coś o sobie ;)" />,
  ...categories.map(props => <Category {...props} />),
  <Summary />,
];

export const Navigation = () => {
  const dispatch = useAppDispatch();

  const tab = useTab();
  const tags = useTagsSelector();

  useEffect(() => {
    const actionTags = actionGetTags();
    dispatch(loadTags(actionTags));
  }, [dispatch]);

  const memoized = useMemo(() => <View>{content[tab]}</View>, [tab]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Progress.Bar progress={tab / 4} width={width - 40} />
        <Text>Obecne tagi:</Text>
        <TagWrapper>
          {tags
            .filter(e => e.state === 'saved')
            .map(props => (
              <Pill key={props.id} {...props} />
            ))}
        </TagWrapper>
      </View>
      <View>
        <Text style={styles.h1}>Step: {tab + 1}</Text>
      </View>
      <View>{memoized}</View>
    </SafeAreaView>
  );
};
