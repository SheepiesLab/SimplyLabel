import React from 'react';
import {View, ScrollView} from 'react-native';
import {Appbar, Checkbox, Searchbar} from 'react-native-paper';

const AddItemToContainer = ({navigation}) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View>
      <Searchbar />
      <ScrollView>
        <Checkbox.Item
          label="test"
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </ScrollView>
    </View>
  );
};

const AddItemToContainerAppBar = ({navigation}) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Appbar.Content title="Add Item" />
      <Appbar.Action
        icon="check"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Appbar.Header>
  );
};

export {AddItemToContainer, AddItemToContainerAppBar};
