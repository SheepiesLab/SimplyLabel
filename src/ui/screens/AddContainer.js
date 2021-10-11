import React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';

const AddContainer = () => {
  return <View />;
};

const AddContainerAppBar = ({navigation}) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Appbar.Content title="Add Container" />
      <Appbar.Action
        icon="check"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Appbar.Header>
  );
};

export {AddContainer, AddContainerAppBar};
