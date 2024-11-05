import { FlatList, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableHighlight, TouchableHighlightBase, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { DrawerNavigation } from "../navigation/RootNavigation";
import { useEffect, useState } from "react";
import { Avatar, Button } from '@rneui/themed';
import CurrentSong from "../general/Component/CurrentSong/currentSong";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Reel from "../general/Component/Reel/reel";
import SongCategory from "../general/Component/SongCategory/SongCategory";

export default function Search({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
                <View >
                    <View style={styles.nav}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => navigation.openDrawer()} >
                                <Avatar rounded size={50} icon={{ name: 'user', type: 'feather' }} containerStyle={{ backgroundColor: 'black' }} />
                            </TouchableOpacity>
                            <Text style={styles.text}>
                                Search
                            </Text>
                        </View>
                        <TouchableOpacity >
                            <AntDesign name="camerao" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                </View >
                <View style={styles.space}>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="search" size={24} color="black" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>What do you want to listen to?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Reel />
                </View>
                <View style={{ marginBottom: 50 }}>
                    <SongCategory />
                </View>

            </ScrollView>
            <CurrentSong />
        </SafeAreaView >


    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    SafeAreaView: {
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'center',
        backgroundColor: 'black'

    },
    nav: {
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    space: {
        marginBottom: 5
    },
    button: {
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 14,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 16,
        color: 'gray',
        marginLeft: 10
    },
    buttonIcon: {
        paddingLeft: 10
    },
    text: {
        marginHorizontal: 12,
        marginVertical: 5,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'

    },
    titleText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700'
    },
    scrollView: {
        padding: 10,
        flex: 1,
        backgroundColor: 'black'
    },
    playlist: {
        marginLeft: 10,
        marginTop: 10
    },
})