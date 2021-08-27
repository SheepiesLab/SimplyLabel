import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";

const Profile = () => {
    return (
    <View></View>
    );
};

const ProfileAppBar = () => {
    return (
        <Appbar.Header>
            <Appbar.Content title="Profile"/>
        </Appbar.Header>
    );
};

export {Profile, ProfileAppBar};