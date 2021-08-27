import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Center, Container, Row, Column } from "react-native-layout-components";
import { Card, TextInput, Button, Divider } from "react-native-paper";
import { BackgroundColor } from "jest-matcher-utils/node_modules/chalk";

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            width: "100%",
            height: "100%",
            justifyContent: "center"
        }}>
            <Card style={{
                margin: 15
            }}>
                <Card.Title title="Login" />
                <Card.Content>
                    <TextInput label="User Name" mode="outlined" textContentType="username" /><Divider />
                    <TextInput label="Password" mode="outlined" textContentType="password" secureTextEntry={true} /><Divider />
                </Card.Content>
                <Card.Actions>
                    <Button onPress={() => { }}>Login</Button>
                    <Button onPress={() => { navigation.navigate("Register") }}>Register</Button>
                </Card.Actions>
            </Card>
        </SafeAreaView>
    );
};

export default Login;