import React from 'react';
import {View} from 'react-native';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {Appbar, Menu} from 'react-native-paper';

const Items = () => {
  return <View />;
};

const ItemsAppBar = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const theme = useSelector(state => state.app.theme);

  return (
    <Appbar.Header>
      <Appbar.Content title="Items" />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="plus" onPress={openMenu} color="white" />}>
        <Menu.Item
          onPress={() => {
            closeMenu();
            navigation.navigate('AddItem');
          }}
          title="Add Item"
        />
        <Menu.Item
          onPress={() => {
            closeMenu();
            navigation.navigate('AddContainer');
          }}
          title="Add Container"
        />
      </Menu>
    </Appbar.Header>
  );
};

export {Items, ItemsAppBar};
