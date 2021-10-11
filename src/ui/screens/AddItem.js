import React from 'react';
import {View} from 'react-native';
import {Appbar, TextInput, Switch, List} from 'react-native-paper';

const AddItem = ({navigation}) => {
  const [label, setLabel] = React.useState('');
  const [name, setName] = React.useState('');

  const [isVirtual, setIsVirtual] = React.useState(false);
  const onIsVirtualSwitch = () => setIsVirtual(!isVirtual);

  const [container, setContainer] = React.useState('first');

  return (
    <View>
      <TextInput label="Label" value={label} onChangeText={t => setLabel(t)} />
      <TextInput label="Name" value={name} onChangeText={t => setName(t)} />
      <TextInput
        label="Description"
        value={label}
        onChangeText={t => setLabel(t)}
        multiline
        numberOfLines={3}
      />
      <List.Item
        title="Add To Container"
        description={container}
        right={() => <List.Icon color="#000" icon="chevron-right" />}
        onPress={() => {
          navigation.navigate('SelectContainer', {
            value: container,
            setValue: setContainer,
          });
        }}
      />
      <List.Item
        title="Is Virtual Item"
        right={props => (
          <Switch value={isVirtual} onValueChange={onIsVirtualSwitch} />
        )}
      />
    </View>
  );
};

const AddItemAppBar = ({navigation}) => {
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

export {AddItem, AddItemAppBar};
