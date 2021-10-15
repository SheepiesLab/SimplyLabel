import React from 'react';
import {ScrollView} from 'react-native';
import {Appbar, Menu, List} from 'react-native-paper';

import {useSelector, useDispatch} from 'react-redux';
import {
  shadowItem,
  emptyShadowItem,
  setEditMode,
} from '../../states/ItemsSlice';

const Items = ({navigation, searchLabel = '', exactMatch = false}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.entries);
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
    itemComponents.push(
      <List.Item
        title={items[k].name}
        description={items[k].label}
        onPress={() => {
          dispatch(setEditMode(false));
          dispatch(shadowItem(items[k]));
          navigation.navigate('Item', k);
        }}
      />,
    );
  }

  return <ScrollView>{itemComponents}</ScrollView>;
};

const ItemsAppBar = ({navigation}) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      <Appbar.Content title="Items" />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="plus" onPress={openMenu} color="white" />}>
        <Menu.Item
          onPress={() => {
            closeMenu();
            dispatch(setEditMode(true));
            dispatch(emptyShadowItem());
            navigation.navigate('Item', 'shadow');
          }}
          title="Add Item"
        />
        <Menu.Item
          onPress={() => {
            closeMenu();
            dispatch(setEditMode(true));
            dispatch(emptyShadowItem());
            navigation.navigate('AddContainer', {
              screen: 'ContainerInfo',
              params: 'shadow',
            });
          }}
          title="Add Container"
        />
      </Menu>
    </Appbar.Header>
  );
};

export {Items, ItemsAppBar};
