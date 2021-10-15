/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, InteractionManager} from 'react-native';
import {useIsFocused, useFocusEffect} from '@react-navigation/core';
import {Appbar, TextInput} from 'react-native-paper';

import {Items} from './Items';
import Camera from '../components/Camera';

const Search = ({navigation, itemOnPress = null, containerOnly = false}) => {
  const isFocused = useIsFocused();
  const [textInputFocus, setTextInputFocus] = useState(false);
  const [searchText, setSearchText] = useState('');

  const cameraSetSearchText = t => {
    if (!textInputFocus) {
      setSearchText(t);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        setSearchText('');
      });

      return () => task.cancel();
    }, [setSearchText]),
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{flex: 1}}>
        <Camera onChangeText={cameraSetSearchText} isFocused={isFocused} />
      </View>
      <View style={{flex: 3}}>
        <TextInput
          label="Label or Name"
          onChangeText={t => setSearchText(t)}
          value={searchText}
          onFocus={() => {
            setTextInputFocus(true);
          }}
          onBlur={() => {
            setTextInputFocus(false);
          }}
        />
        <Items
          navigation={navigation}
          searchLabel={searchText}
          exactMatch={!textInputFocus}
          itemOnPress={itemOnPress}
          containerOnly={containerOnly}
        />
      </View>
    </View>
  );
};

const SearchAppBar = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Search" />
    </Appbar.Header>
  );
};

export {Search, SearchAppBar};
