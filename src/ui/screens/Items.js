import React from 'react';
import {ScrollView, View} from 'react-native';
import {Appbar, List, Button} from 'react-native-paper';

import {useSelector, useDispatch} from 'react-redux';
import {
  shadowItem,
  emptyShadowItem,
  setEditMode,
} from '../../states/ItemsSlice';

const Items = ({
  navigation,
  searchLabel = '',
  exactMatch = false,
  inContainer = '',
  itemOnPress = null,
  containerOnly = false,
  exclude = [],
  deleteIcon = false,
}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.entries);
  itemOnPress =
    itemOnPress === null
      ? k => () => {
          dispatch(setEditMode(false));
          dispatch(shadowItem(k));
          navigation.navigate('Item', k);
        }
      : itemOnPress;
  let itemComponents = [];
  for (const k in items) {
    if (k === 'shadow') {
      continue;
    }
    const itemLabel = items[k].label
      .toLowerCase()
      .replace(/\s/g, '')
      .replace('i', '1')
      .replace('l', '1')
      .replace('o', '0');
    const itemName = items[k].name
      .toLowerCase()
      .replace(/\s/g, '')
      .replace('i', '1')
      .replace('l', '1')
      .replace('0', 'o');
    searchLabel = searchLabel
      .toLowerCase()
      .replace(/\s/g, '')
      .replace('i', '1')
      .replace('l', '1')
      .replace('0', 'o');
    if (
      searchLabel !== '' &&
      !exactMatch &&
      !itemLabel.includes(searchLabel) &&
      !itemName.includes(searchLabel)
    ) {
      continue;
    }
    if (searchLabel !== '' && exactMatch && itemLabel !== searchLabel) {
      continue;
    }
    if (inContainer !== '' && items[k].container !== inContainer) {
      continue;
    }
    if (containerOnly && !items[k].isContainer) {
      continue;
    }
    if (exclude.includes(k)) {
      continue;
    }
    itemComponents.push(
      <List.Item
        key={k}
        title={items[k].name}
        description={items[k].label}
        onPress={itemOnPress(k)}
        left={() => {
          return deleteIcon ? <List.Icon icon="minus" color="red" /> : <View />;
        }}
      />,
    );
  }

  return (
    <ScrollView>
      {itemComponents.length === 0 && inContainer === '' && (
        <List.Item title="No Item" />
      )}
      {itemComponents}
    </ScrollView>
  );
};

const ItemsAppBar = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <Appbar.Header>
      <Appbar.Content title="Items" />
      <Appbar.Action
        icon="plus"
        onPress={() => {
          dispatch(setEditMode(true));
          dispatch(emptyShadowItem());
          navigation.navigate('Item', 'shadow');
        }}
      />
    </Appbar.Header>
  );
};

export {Items, ItemsAppBar};
