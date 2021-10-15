import React from 'react';
import {ScrollView} from 'react-native';
import {Appbar, RadioButton} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {setShadowItem} from '../../states/ItemsSlice';
import {Search} from './Search';

const SelectContainer = ({navigation}) => {
  const shadow = useSelector(state => state.items.entries.shadow);
  const dispatch = useDispatch();
  return (
    <Search
      containerOnly={true}
      itemOnPress={k => () => {
        dispatch(setShadowItem({...shadow, container: k}));
        navigation.goBack();
      }}
    />
  );
};

const SelectContainerAppBar = ({navigation}) => {
  const shadow = useSelector(state => state.items.entries.shadow);
  const dispatch = useDispatch();
  return (
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Appbar.Content title="Add Item - Add To Container" />
      <Appbar.Action
        icon="close"
        onPress={() => {
          dispatch(setShadowItem({...shadow, container: ''}));
          navigation.goBack();
        }}
      />
    </Appbar.Header>
  );
};

export {SelectContainer, SelectContainerAppBar};
