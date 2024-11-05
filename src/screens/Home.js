import { FlatList, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableHighlight, TouchableHighlightBase, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { DrawerNavigation } from "../navigation/RootNavigation";
import { useEffect, useState } from "react";
import { Avatar, Button } from '@rneui/themed';
import ButtonList from "../general/CustomButtom/ButtonList";
import Animated from "react-native-reanimated";
import LeftSheet from "../general/sheet/SideSheet";
import Playlist from "../general/Component/Playlist/Playlist";
import TopMix from "../general/Component/TopMix/TopMix";
import CurrentSong from "../general/Component/CurrentSong/currentSong";

export default function Home({ navigation }) {
    const [currentTab, setCurrentTab] = useState(0)
    const buttonItems = [
        { id: 0, label: 'All' },
        { id: 1, label: 'Music' },
        { id: 2, label: 'Podcasts' },
        // Add more items as needed
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 5, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} >
                        <Avatar rounded size={50} icon={{ name: 'user', type: 'feather' }} containerStyle={{ backgroundColor: 'black' }} />
                    </TouchableOpacity>
                    <ButtonList buttons={buttonItems} currentTab={currentTab} setCurrentTab={setCurrentTab} />
                </View>
                <ScrollView>
                    <View>
                        {
                            currentTab == 0 &&

                            < View >
                                <ScrollView
                                    // stickyHeaderIndices={[1]}
                                    style={styles.scrollView}
                                >
                                    <Playlist />
                                    <TopMix />
                                    <TopMix />
                                    <TopMix />
                                    <TopMix />
                                </ScrollView>
                            </View>
                        }
                        {
                            currentTab == 1 &&
                            <View>
                                <ScrollView
                                    // stickyHeaderIndices={[1]}
                                    style={styles.scrollView}
                                >
                                    <Playlist />
                                    <TopMix />
                                    <TopMix />
                                    <TopMix />
                                    <TopMix />
                                </ScrollView>
                            </View>
                        }
                        {
                            currentTab == 2 &&
                            <Text>{currentTab}</Text>
                        }
                    </View>
                </ScrollView>
                <View style={{ marginTop: 50 }}>
                    <CurrentSong />
                </View>
            </View >

        </SafeAreaView >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    SafeAreaView: {
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'center',
        backgroundColor: 'black'

    },
    button: {
        borderWidth: 1,
        borderRadius: 30,
        marginLeft: 10,
        backgroundColor: 'grey',
    },
    buttonText: {
        marginHorizontal: 12,
        marginVertical: 5,
        color: 'white'
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
    // currentSongContainer: {
    //     position: 'absolute',
    //     bottom: 10, // Adjust to match tab bar height
    //     left: 0,
    //     right: 0,
    //     zIndex: 1, // Ensure it appears above the tab bar
    // },
})