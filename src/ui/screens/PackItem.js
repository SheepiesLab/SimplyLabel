/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Appbar} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {setShadowItemAddContaining} from '../../states/ItemsSlice';
import {Search} from './Search';

const PackItem = ({navigation}) => {
  const shadow = useSelector(state => state.items.entries.shadow);
  const dispatch = useDispatch();

  return (
    <Search
      itemOnPress={k => () => {
        dispatch(setShadowItemAddContaining(k));
        navigation.goBack();
      }}
    />
  );
};

const PackItemAppBar = ({navigation}) => {
  return (
    <Appbar.Header>
      <Appbar.Action
        icon="chevron-left"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Appbar.Content title="Pack Item" />
    </Appbar.Header>
  );
};

export {PackItem, PackItemAppBar};
