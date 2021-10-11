import React from 'react';
import {ScrollView} from 'react-native';
import {Appbar, RadioButton} from 'react-native-paper';

const SelectContainer = ({navigation, route}) => {
  const {value, setValue} = route.params;
  return (
    <ScrollView>
      <RadioButton.Group
        onValueChange={v => {
          setValue(v);
          navigation.goBack();
        }}
        value={value}>
        <RadioButton.Item label="Placeholder Container 1" value="first" />
        <RadioButton.Item label="Placeholder Container 2" value="second" />
        <RadioButton.Item label="Placeholder Container 3" value="third" />
        <RadioButton.Item label="Placeholder Container 4" value="fourth" />
        <RadioButton.Item label="Placeholder Container 5" value="fifth" />
        <RadioButton.Item label="Placeholder Container 6" value="sixth" />
        <RadioButton.Item label="Placeholder Container 7" value="seventh" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
        <RadioButton.Item label="Placeholder Container 8" value="eighth" />
      </RadioButton.Group>
    </ScrollView>
  );
};

const SelectContainerAppBar = ({navigation}) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Appbar.Content title="Add Item - Add To Container" />
    </Appbar.Header>
  );
};

export {SelectContainer, SelectContainerAppBar};
