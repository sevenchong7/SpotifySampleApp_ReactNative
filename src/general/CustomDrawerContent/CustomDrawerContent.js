// CustomDrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Avatar } from '@rneui/themed';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const CustomDrawerContent = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Avatar rounded size={50} icon={{ name: 'user', type: 'feather' }} containerStyle={{ backgroundColor: 'black' }} />
                    <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                        <Text style={styles.username}>Username</Text>
                        <Text style={styles.profileText}>View Profile</Text>
                    </View>
                </View>
                <View style={styles.drawerItems}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('AddAccount')}>
                        <Feather name="plus" size={30} color="white" />
                        <Text style={styles.drawerItem}>Add account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('News')}>
                        <MaterialCommunityIcons name="lightning-bolt-outline" size={30} color="white" />
                        <Text style={styles.drawerItem}>What's new</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Listening', { screen: 'Listening' })}>
                        <MaterialCommunityIcons name="history" size={30} color="white" />
                        <Text style={styles.drawerItem}>Listening history</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Settings', { screen: 'Settings' })}>
                        <AntDesign name="setting" size={30} color="white" />
                        <Text style={styles.drawerItem}>Settings and privacy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        backgroundColor: 'dimgray',
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    username: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    profileText: {
        color: 'darkgray',
    },
    drawerItems: {
        flex: 1,
    },
    drawerItem: {
        marginHorizontal: 10,
        paddingVertical: 15,
        fontSize: 20,
        color: 'white'
    },
});

export default CustomDrawerContent;
