import { FlatList, Image, Modal, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Touchable, TouchableHighlight, TouchableHighlightBase, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { DrawerNavigation } from "../navigation/RootNavigation";
import { useEffect, useState } from "react";
import { Avatar, Button } from '@rneui/themed';
import CurrentSong from "../general/Component/CurrentSong/currentSong";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Reel from "../general/Component/Reel/reel";
import SongCategory from "../general/Component/SongCategory/SongCategory";
import ButtonList from "../general/CustomButtom/ButtonList";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import { PlayListData } from "../../data/data";
import { ScreenWidth } from "@rneui/base";

export default function Library({ navigation }) {
    const [currentTab, setCurrentTab] = useState(0)
    const [listType, setListType] = useState(false)
    const [reverseList, setReverseList] = useState(false)
    const [addPlaylistModal, setAddPlaylistModal] = useState(false)
    const buttonItems = [
        { id: 0, label: 'Playlists' },
        { id: 1, label: 'Albums' },
        { id: 2, label: 'Artists' },
        { id: 3, label: 'Downloaded' },
        // { id: 4, label: 'Artists' },
        // Add more items as needed
    ];

    const currentColumnCount = listType ? 1 : 3; // Set columns based on layout type
    const sortedData = PlayListData.slice().sort((a, b) => b.id - a.id);
    // Render rows if grid view is active
    const rows = [];
    for (let i = 0; i < PlayListData.length; i += currentColumnCount) {
        if (reverseList) {
            rows.push(sortedData.slice(i, i + currentColumnCount));

        } else {
            rows.push(PlayListData.slice(i, i + currentColumnCount));
        }
    }

    const ItemRow = ({ items, isLastItem }) => {
        return (
            <View>
                <View style={styles.itemsRow}>
                    {/* Map over each item to render it */}
                    {items.map((item) => (
                        <View style={styles.itemContainer} key={item.id}>
                            <TouchableOpacity style={{ flexDirection: listType ? 'row' : 'column', }}>
                                <View style={styles.largeBox}></View>
                                <View style={{ marginBottom: 10, marginLeft: listType ? 10 : 0, justifyContent: 'center' }}>
                                    <Text style={styles.renderItemText}>{item.name}</Text>
                                    <Text style={[styles.renderItemText, { color: 'lightgray', maxWidth: 120 }]} numberOfLines={1} ellipsizeMode="tail">
                                        Playlist . {item.song}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}

                    {/* If it's the last row and has less than 3 items, add buttons or placeholders */}
                    {isLastItem && !listType && (
                        <>
                            {
                                items.length < 3 && (
                                    <TouchableOpacity style={styles.itemContainer}>
                                        <View style={[styles.largeBox, { backgroundColor: 'dimgray', justifyContent: 'center', alignItems: 'center', borderRadius: 100 }]}>
                                            <Text style={{ color: 'lightgray', fontSize: 16 }}>Add Artist</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                            {items.length < 2 && (
                                <TouchableOpacity style={styles.itemContainer}>
                                    <View style={[styles.largeBox, { backgroundColor: 'dimgray', justifyContent: 'center', alignItems: 'center' }]}>
                                        <Text style={{ color: 'lightgray', fontSize: 16 }}>Add Podcast</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </>

                    )}
                </View>
                {
                    isLastItem && items.length === 2 && !listType && (
                        <View style={[styles.itemsRow, { marginTop: 10 }]}>
                            <TouchableOpacity style={styles.itemContainer}>
                                <View style={[styles.largeBox, { backgroundColor: 'dimgray', justifyContent: 'center', alignItems: 'center' }]}>
                                    <Text style={{ color: 'lightgray', fontSize: 16 }}>Add Podcast</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
                {
                    isLastItem && items.length === 3 && !listType && (
                        <View style={[styles.itemsRow, { marginTop: 10 }]}>
                            <TouchableOpacity style={styles.itemContainer}>
                                <View style={[styles.largeBox, { backgroundColor: 'dimgray', justifyContent: 'center', alignItems: 'center', borderRadius: 100 }]}>
                                    <Text style={{ color: 'lightgray', fontSize: 16 }}>Add Artist</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.itemContainer}>
                                <View style={[styles.largeBox, { backgroundColor: 'dimgray', justifyContent: 'center', alignItems: 'center' }]}>
                                    <Text style={{ color: 'lightgray', fontSize: 16 }}>Add Podcast</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
                {
                    isLastItem && listType && (
                        <View style={[{ marginTop: 10 }]}>
                            <TouchableOpacity >
                                <View style={[styles.largeBox, { backgroundColor: 'dimgray', justifyContent: 'center', alignItems: 'center', borderRadius: 100 }]}>
                                    <Text style={{ color: 'lightgray', fontSize: 16 }}>Add Artist</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={[styles.largeBox, { backgroundColor: 'dimgray', justifyContent: 'center', alignItems: 'center' }]}>
                                    <Text style={{ color: 'lightgray', fontSize: 16 }}>Add Podcast</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View >
        );
    };



    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={addPlaylistModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setAddPlaylistModal(!addPlaylistModal);
                }}>
                <View style={styles.centeredView}>
                    <TouchableOpacity style={{ width: '100%', flex: 1 }} onPress={() => { setAddPlaylistModal(false) }}>
                    </TouchableOpacity>
                    <View style={styles.modalView}>
                        <View>

                        </View>
                    </View>
                </View>

            </Modal>
            <View style={styles.container}>
                <View style={styles.space}>
                    <View >
                        <View style={styles.nav}>
                            <View style={[styles.row, { flex: 4 }]}>
                                <TouchableOpacity onPress={() => navigation.openDrawer()} >
                                    <Avatar rounded size={50} icon={{ name: 'user', type: 'feather' }} containerStyle={{ backgroundColor: 'black' }} />
                                </TouchableOpacity>
                                <Text style={styles.text}>
                                    Your Library
                                </Text>
                            </View>
                            <View style={[styles.row, { flex: 1, justifyContent: 'space-between' }]}>
                                <TouchableOpacity >
                                    <Ionicons name="search" size={24} color="white" style={styles.buttonIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { setAddPlaylistModal(!addPlaylistModal) }}>
                                    <AntDesign name="plus" size={24} color="white" />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View >
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 5, alignItems: 'center' }}>
                        <ButtonList buttons={buttonItems} currentTab={currentTab} setCurrentTab={setCurrentTab} />
                    </View>
                </View>
                <ScrollView style={styles.container}>
                    <View style={[styles.row, { justifyContent: 'space-between', marginVertical: 10 }]}>
                        <TouchableOpacity onPress={() => { setReverseList(!reverseList) }}>
                            <View style={styles.row}>
                                <Ionicons name="swap-vertical" size={20} color="white" />
                                <Text style={[styles.titleText, { marginLeft: 5 }]}>Recents</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setListType(!listType)}>
                            {
                                listType ?
                                    <FontAwesome5 name="list-ul" size={20} color="white" /> :
                                    <Feather name="grid" size={20} color="white" />
                            }
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.container}>
                            {
                                rows.map((row, index) => (
                                    <ItemRow key={`row-${index}`} items={row} isLastItem={index === rows.length - 1} />
                                ))
                            }
                        </View>

                    </View>
                </ScrollView>
                <View style={{ marginTop: 60 }}>
                    <CurrentSong />
                </View>
            </View>
        </SafeAreaView >


    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 5
    },
    SafeAreaView: {
        flex: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    itemsrow: {
        flexDirection: 'row',
        paddingRight: ScreenWidth / 3 - 125,
        // justifyContent: 'space-between',
        // marginBottom: 20,
        // flex: 1,
        // justifyContent: ,
        // marginRight: 
        // marginRight: ScreenWidth / 3 - 120
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
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
        // marginHorizontal: 12,
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
    renderItemText: {
        fontSize: 14,
        color: 'white'
    },
    largeBox: {
        height: 120,
        width: 120,
        backgroundColor: 'pink',
        marginBottom: 10,
        borderRadius: 5

    },
    smallBox: {
        height: 80,
        width: 80,
        backgroundColor: 'pink',
        marginBottom: 15,
        borderRadius: 5
    },
    addButton: {
        // margin: 10,
        // alignItems: 'center',
    },
    itemsRow: {
        flexDirection: 'row',
        // justifyContent: 'space-between', // Spacing between items
        // marginBottom: 20,
    },
    itemContainer: {
        // flex: 1,
        alignItems: 'center',
        marginRight: ScreenWidth / 3 - 125
    },
    renderItemText: {
        fontSize: 16,
        color: 'white',
    },
    centeredView: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalView: {
        zIndex: 10,
        width: '100%',
        marginBottom: 20,
        backgroundColor: 'dimgray',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
})