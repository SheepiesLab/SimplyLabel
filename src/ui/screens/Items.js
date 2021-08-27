import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";

const Items = () => {
    return (
    <View></View>
    );
};

const ItemsAppBar = () => {
    return (
        <Appbar.Header>
            <Appbar.Content title="Items"/>
        </Appbar.Header>
    );
};

export {Items, ItemsAppBar};