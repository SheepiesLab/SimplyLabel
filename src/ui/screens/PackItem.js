/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/core';
import Camera from '../components/Camera';

const PackItem = ({navigation}) => {
  const isFocused = useIsFocused();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{flex: 1}}>
        <Camera onChangeText={() => {}} isFocused={isFocused} />
      </View>
      <View style={{flex: 3}} />
    </View>
  );
};

const PackItemAppBar = ({navigation, parentNavigation}) => {
  return (
    <Appbar.Header>
      <Appbar.Action
        icon="chevron-left"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Appbar.Content title="Pack Item" />
      <Appbar.Action
        icon="check"
        onPress={() => {
          parentNavigation.goBack();
        }}
      />
    </Appbar.Header>
  );
};

export {PackItem, PackItemAppBar};
