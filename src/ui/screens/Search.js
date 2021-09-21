import React, {useState} from 'react';
import {View} from 'react-native';
import {useIsFocused} from '@react-navigation/core';
import {Appbar, TextInput, Text} from 'react-native-paper';

import Camera from '../components/Camera';

const Search = () => {
  const isFocused = useIsFocused();
  const [textInputFocus, setTextInputFocus] = useState(false);
  const [searchText, setSearchText] = useState('');

  const cameraSetSearchText = t => {
    if (!textInputFocus) {
      setSearchText(t);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Camera onChangeText={cameraSetSearchText} isFocused={isFocused} />
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
      <Text>{searchText}</Text>
      <Text>{textInputFocus ? 'text' : 'camera'}</Text>
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
