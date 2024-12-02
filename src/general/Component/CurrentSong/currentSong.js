import { Alert, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";

export default function CurrentSong() {
    const [playPause, setPlayPause] = useState(false)
    const [currentSongModal, setCurrentSongModal] = useState(false)

    return (
        <View style={styles.currentSongContainer}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={currentSongModal}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    setCurrentSongModal(!currentSongModal);
                }}
            >
                <View style={styles.centeredView}>
                    <ScrollView style={{ marginHorizontal: 20, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => { setCurrentSongModal(false) }}>
                                <AntDesign name="down" size={24} color="white" />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.textCenter}>
                                    PLAYING FROM ARTIST
                                </Text>
                                <Text style={styles.textCenter}>
                                    ARTIST
                                </Text>
                            </View>
                            <TouchableOpacity>
                                <Entypo name="dots-three-vertical" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 350, width: 350, backgroundColor: 'pink', borderRadius: 5 }} />
                        </View>
                        <View>
                            <View style={[styles.row, { marginTop: 50, justifyContent: 'space-between' }]}>
                                <View>
                                    <Text style={[styles.text, { fontSize: 18, fontWeight: 'semibold' }]}>
                                        Song Name
                                    </Text>
                                    <Text style={[styles.text, { color: 'lightgray' }]}>
                                        Artist Name
                                    </Text>
                                </View>
                                <TouchableOpacity>
                                    <AntDesign name="pluscircleo" size={32} color="white" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <View style={{ height: 2, backgroundColor: 'lightgray' }} />
                                <View style={{ marginTop: 4, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.text}>
                                        0:00
                                    </Text>
                                    <Text style={styles.text}>
                                        0:00
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'center' }]}>
                                    <TouchableOpacity>
                                        <Ionicons name="shuffle-outline" size={24} color="white" />
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                        <Entypo name="controller-jump-to-start" size={40} color="white" />
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                        <AntDesign name="play" size={50} color="white" />
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                        <Entypo name="controller-next" size={40} color="white" />
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                        <SimpleLineIcons name="loop" size={24} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[{ marginTop: 30 }]}>
                            <View style={[styles.row, { justifyContent: 'space-between' }]}>
                                <TouchableOpacity>
                                    <MaterialIcons name="devices" size={24} color="white" />
                                </TouchableOpacity>
                                <View style={[styles.row, { justifyContent: 'center', alignItems: 'center' }]}>
                                    <TouchableOpacity style={{ marginRight: 20 }}>
                                        <AntDesign name="sharealt" size={24} color="white" />
                                    </TouchableOpacity><TouchableOpacity>
                                        <Feather name="list" size={24} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 350, width: 350, backgroundColor: 'pink', borderRadius: 5 }} />
                        </View>
                    </ScrollView>
                </View>
            </Modal >
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => { console.log('current song click '); setCurrentSongModal(true) }}>
                    <View style={[styles.row, { flex: 5 }]}>
                        <View style={styles.songpic}></View>
                        <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                            <Text style={[styles.text, { fontWeight: 'bold' }]}>
                                Song name
                            </Text>
                            <Text style={styles.text}>
                                author
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback >
                <View style={[styles.row, { flex: 2, justifyContent: 'space-between' }]}>
                    <TouchableOpacity>
                        <MaterialIcons name="devices" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="pluscircleo" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setPlayPause(!playPause) }}>
                        {
                            playPause ?
                                <Ionicons name="pause" size={24} color="white" /> :
                                <Ionicons name="play" size={24} color="white" />
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        width: '95%',
        height: 55,
        borderRadius: 5,
        margin: 'auto',
        backgroundColor: 'darkgray',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
    },
    // content: {

    // },
    songpic: {
        padding: 20,
        backgroundColor: 'black'
    },
    text: {
        color: 'white',
    },
    textCenter: {
        color: 'white',
        textAlign: 'center'
    },
    currentSongContainer: {
        position: 'absolute',
        bottom: 10, // Adjust to match tab bar height
        left: 0,
        right: 0,
        zIndex: 1, // Ensure it appears above the tab bar
    },
    centeredView: {
        // backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backgroundColor: "black",
        paddingTop: 5,
        paddingHorizontal: 5,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    // modalView: {
    //     zIndex: 10,
    //     width: '100%',
    //     marginBottom: 20,
    //     backgroundColor: 'dimgray',
    //     borderRadius: 10,
    //     padding: 35,
    //     alignItems: 'center',
    //     shadowColor: '#000',
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 4,
    //     elevation: 5,
    // },
})