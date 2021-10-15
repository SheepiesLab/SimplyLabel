import React from 'react';
import {ScrollView} from 'react-native';
import {Appbar, RadioButton} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {shadowItem} from '../../states/ItemsSlice';

const SelectContainer = () => {
  const shadow = useSelector(state => state.items.entries.shadow);
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <RadioButton.Group
        onValueChange={v => {
          dispatch(
            shadowItem({
              ...shadow,
              container: v,
            }),
          );
        }}
        value={shadow.container}>
        <RadioButton.Item label="No Container" value="" />
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
