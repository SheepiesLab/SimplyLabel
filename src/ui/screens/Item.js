import React from 'react';
import {View, ScrollView} from 'react-native';
import {Appbar, TextInput, Switch, List, Divider} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {
  setShadowItem,
  emptyShadowItem,
  commitShadowItem,
  updateItem,
  setEditMode,
  deleteItem,
} from '../../states/ItemsSlice';
import {Items} from './Items';

const Item = ({navigation, route}) => {
  const dispatch = useDispatch();
  const shadow = useSelector(state => state.items.entries.shadow);
  const editMode = useSelector(state => state.items.itemScreenInEdit);
  const itemKey = route.params;

  return (
    <ScrollView>
      <TextInput
        label="Label"
        value={shadow.label}
        onChangeText={t =>
          dispatch(
            setShadowItem({
              ...shadow,
              label: t,
            }),
          )
        }
        editable={editMode}
      />
      <TextInput
        label="Name"
        value={shadow.name}
        onChangeText={t =>
          dispatch(
            setShadowItem({
              ...shadow,
              name: t,
            }),
          )
        }
        editable={editMode}
      />
      <TextInput
        label="Description"
        value={shadow.description}
        onChangeText={t =>
          dispatch(
            setShadowItem({
              ...shadow,
              description: t,
            }),
          )
        }
        multiline
        numberOfLines={3}
        editable={editMode}
      />
      <List.Item
        title={shadow.container === '' ? 'Not In Container' : shadow.container}
        description="In Container"
        right={() => <List.Icon color="#000" icon="chevron-right" />}
        onPress={() => {
          if (editMode) {
            navigation.navigate('SelectContainer');
          }
        }}
      />
      <List.Item
        title="Is Virtual Item"
        right={props => (
          <Switch
            value={shadow.isVirtual}
            onValueChange={t =>
              dispatch(
                setShadowItem({
                  ...shadow,
                  isVirtual: !shadow.isVirtual,
                }),
              )
            }
            disabled={!editMode}
          />
        )}
      />
      <List.Item
        title="Is Container"
        right={props => (
          <Switch
            value={shadow.isContainer}
            onValueChange={t =>
              dispatch(
                setShadowItem({
                  ...shadow,
                  isContainer: !shadow.isContainer,
                }),
              )
            }
            disabled={!editMode}
          />
        )}
      />
      <Divider />
      {shadow.isContainer && editMode && (
        <View>
          <List.Item
            title="Pack Item"
            right={() => <List.Icon color="#000" icon="chevron-right" />}
            onPress={() => {
              if (editMode) {
                navigation.navigate('PackItem');
              }
            }}
          />
          <Divider />
        </View>
      )}
      <Items inContainer={itemKey} />
    </ScrollView>
  );
};

const ItemAppBar = ({navigation, route}) => {
  const itemKey = route.params;
  const item = useSelector(state => state.items.entries[itemKey]);
  const editMode = useSelector(state => state.items.itemScreenInEdit);
  const dispatch = useDispatch();

  return (
    <Appbar.Header>
      {(!editMode || itemKey === 'shadow') && (
        <Appbar.Action
          icon="chevron-left"
          onPress={() => {
            dispatch(emptyShadowItem());
            navigation.goBack();
          }}
        />
      )}
      {editMode && itemKey !== 'shadow' && (
        <Appbar.Action
          icon="delete"
          onPress={() => {
            navigation.goBack();
            dispatch(deleteItem(itemKey));
          }}
        />
      )}
      <Appbar.Content title={itemKey === 'shadow' ? 'Add Item' : item.name} />
      {(itemKey === 'shadow' || editMode) && (
        <Appbar.Action
          icon="check"
          onPress={() => {
            if (itemKey === 'shadow') {
              dispatch(commitShadowItem());
              navigation.goBack();
            } else {
              dispatch(updateItem(itemKey));
              dispatch(setEditMode(false));
            }
          }}
        />
      )}
      {!editMode && (
        <Appbar.Action
          icon="pencil"
          onPress={() => {
            dispatch(setEditMode(true));
          }}
        />
      )}
    </Appbar.Header>
  );
};

export {Item, ItemAppBar};
