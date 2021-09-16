import React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';

const Search = () => {
  return <View />;
};

const SearchAppBar = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Search" />
    </Appbar.Header>
  );
};

export {Search, SearchAppBar};
