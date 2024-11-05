import React, { useRef } from 'react';
import { Animated, TouchableWithoutFeedback, View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

const ButtonList = ({ buttons, currentTab, setCurrentTab }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row' }}>
                {buttons.map((button, index) => (
                    <ZoomButton key={index} currentTab={currentTab} setCurrentTab={setCurrentTab} title={button.label} index={index} />
                ))}
            </ScrollView>
        </View >

    );
};

const ZoomButton = ({ currentTab, setCurrentTab, title, index }) => {
    const scale = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scale, {
            toValue: 0.9,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={() => setCurrentTab(index)}>
            <Animated.View style={[styles.button, { backgroundColor: currentTab === index ? 'lime' : 'gray', transform: [{ scale }] }]}>
                <Text style={[styles.buttonText, { color: currentTab === index ? 'black' : 'white' }]}>{title}</Text>
            </Animated.View>
        </TouchableWithoutFeedback >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // flex: 1,
        alignItems: 'center',
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderRadius: 30,
        marginRight: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
    },
});

export default ButtonList;
