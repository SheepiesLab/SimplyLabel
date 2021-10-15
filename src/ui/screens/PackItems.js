/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/core';
import Camera from '../components/Camera';

const PackItems = () => {
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

const PackItemsAppBar = ({navigation}) => {
  return (
    <Appbar.Header>
      <Appbar.Action
        icon="chevron-left"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Appbar.Content title="Pack Items" />
      <Appbar.Action
        icon="plus"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Appbar.Header>
  );
};

export {PackItems, PackItemsAppBar};
