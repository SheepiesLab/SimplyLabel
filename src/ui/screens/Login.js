/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Card, TextInput, Button, Divider} from 'react-native-paper';

const Login = ({navigation, setAuthed}) => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}>
      <Card
        style={{
          margin: 15,
        }}>
        <Card.Title title="Login" />
        <Card.Content>
          <TextInput
            label="User Name"
            mode="outlined"
            textContentType="username"
          />
          <Divider />
          <TextInput
            label="Password"
            mode="outlined"
            textContentType="password"
            secureTextEntry={true}
          />
          <Divider />
        </Card.Content>
        <Card.Actions>
          <Button
            onPress={() => {
              setAuthed(true);
            }}>
            Login
          </Button>
          <Button
            onPress={() => {
              navigation.navigate('Register');
            }}>
            Register
          </Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  );
};

export default Login;
