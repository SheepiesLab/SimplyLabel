import React from "react";
import { InteractionManager } from "react-native";
import { useFocusEffect } from "@react-navigation/core";
import { Center } from "react-native-layout-components";
import { Title } from "react-native-paper";

const Splash = ({setSplashed}) => {
    useFocusEffect(
        React.useCallback(() => {
            const task = InteractionManager.runAfterInteractions(() => {
                setTimeout(() => {setSplashed(true)}, 1000);
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