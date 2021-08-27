import React from "react";
import { InteractionManager } from "react-native";
import { useFocusEffect } from "@react-navigation/core";
import { Center } from "react-native-layout-components";
import { Title } from "react-native-paper";

const Splash = ({navigation}) => {
    useFocusEffect(
        React.useCallback(() => {
            const task = InteractionManager.runAfterInteractions(() => {
                setTimeout(() => {navigation.navigate("LoginStack")}, 1000);
            });

            return () => task.cancel();
        }, [])
    );

    return (
        <Center>
            <Title>SimplyLabel</Title>
        </Center>
    );
};

export default Splash;