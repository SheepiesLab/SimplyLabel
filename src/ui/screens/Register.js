import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Center, Container, Row, Column } from "react-native-layout-components";
import { Card, TextInput, Button } from "react-native-paper";
import { BackgroundColor } from "jest-matcher-utils/node_modules/chalk";

const Register = ({navigation}) => {
    return (
        <SafeAreaView style={{
            width: "100%",
            height: "100%",
            justifyContent: "center"
        }}>
            <Card style={{
                margin: 15
            }}>
                <Card.Title title="Register" />
                <Card.Content>
                    <TextInput label="User Name" mode="outlined" textContentType="username" />
                    <TextInput label="Password" mode="outlined" textContentType="newPassword" secureTextEntry={true} />
                </Card.Content>
                <Card.Actions>
                    <Button onPress={()=>{}}>Register</Button>
                    <Button onPress={()=>{navigation.goBack()}}>Login</Button>
                </Card.Actions>
            </Card>
        </SafeAreaView>
    );
};

export default Register;