import React from 'react';
import {View} from 'react-native';
import {TabActions} from '@react-navigation/native';
import {Appbar, TextInput, Switch, List} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {
  shadowItem,
  emptyShadowItem,
  commitShadowItem,
  updateItem,
  setEditMode,
} from '../../states/ItemsSlice';

const Item = ({navigation}) => {
  const dispatch = useDispatch();
  const shadow = useSelector(state => state.items.entries.shadow);
  const editMode = useSelector(state => state.items.itemScreenInEdit);

  return (
    <View>
      <TextInput
        label="Label"
        value={shadow.label}
        onChangeText={t =>
          dispatch(
            shadowItem({
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
            shadowItem({
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
            shadowItem({
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
        title="In Container"
        description={shadow.container}
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
                shadowItem({
                  ...shadow,
                  isVirtual: !shadow.isVirtual,
                }),
              )
            }
            disabled={!editMode}
          />
        )}
      />
    </View>
  );
};

const ItemAppBar = ({navigation, route}) => {
  const itemKey = route.params;
  const item = useSelector(state => state.items.entries[itemKey]);
  const editMode = useSelector(state => state.items.itemScreenInEdit);
  const dispatch = useDispatch();

  return (
    <Appbar.Header>
      <Appbar.Action
        icon="chevron-left"
        onPress={() => {
          dispatch(emptyShadowItem());
          navigation.goBack();
        }}
      />
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

const AddContainerItemAppBar = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <Appbar.Header>
      <Appbar.Action
        icon="chevron-left"
        onPress={() => {
          dispatch(emptyShadowItem());
          navigation.goBack();
        }}
      />
      <Appbar.Content title="Container Info" />
      <Appbar.Action
        icon="chevron-right"
        onPress={() => {
          navigation.dispatch(TabActions.jumpTo('PackItems'));
        }}
      />
    </Appbar.Header>
  );
};

export {Item, ItemAppBar, AddContainerItemAppBar};
