import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

export default function CurrentSong() {
    const [playPause, setPlayPause] = useState(false)
    return (
        <View style={styles.currentSongContainer}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => { console.log('current song click ') }}>
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
        </View>
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
    currentSongContainer: {
        position: 'absolute',
        bottom: 10, // Adjust to match tab bar height
        left: 0,
        right: 0,
        zIndex: 1, // Ensure it appears above the tab bar
    },
})