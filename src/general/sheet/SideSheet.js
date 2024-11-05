import React, { useRef, useEffect } from 'react';
import { View, Text, SafeAreaView, Animated, TouchableOpacity, StyleSheet } from 'react-native';

const LeftSheet = ({ visible, onClose }) => {
    const translateX = useRef(new Animated.Value(-300)).current; // Start hidden off-screen

    useEffect(() => {
        if (visible) {
            Animated.timing(translateX, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateX, {
                toValue: -700,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    return (
        <View style={styles.container}>
            {visible && (
                <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1} />
            )}
            <Animated.View style={[styles.sheet, { transform: [{ translateX }] }]}>
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.content}>
                        <Text style={styles.title}>Username</Text>
                        <Text style={styles.subtitle}>View Profile</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    sheet: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 300, // Width of your sheet
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    safeArea: {
        flex: 1,
        padding: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'gray',
        marginBottom: 20,
    },
    closeButton: {
        color: 'blue',
        marginTop: 20,
    },
});

export default LeftSheet;
