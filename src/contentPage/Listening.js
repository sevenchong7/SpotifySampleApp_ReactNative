import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import CurrentSong from "../general/Component/CurrentSong/currentSong";

export default function Listening({ navigation }) {
    return <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
            <View style={styles.herdaerContainer}>
                <View style={{ position: 'relative', flexDirection: 'row', marginBottom: 10, justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', left: 0, position: 'absolute' }}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Home' }],
                            });
                        }}>
                            <Ionicons name="arrow-back" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', }}>
                        Recently played
                    </Text>
                </View>
            </View>
            <ScrollView style={styles.container}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>
                        Date, Datetime
                    </Text>
                    {[...Array(50)].map((_, index) => (
                        <RecentlyPlaylist key={index} />
                    ))}
                </View>
            </ScrollView>
            <View style={{ marginTop: 50 }}>
                <CurrentSong />
            </View>
        </View>
    </SafeAreaView >
}

const RecentlyPlaylist = () => {
    return <>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ height: 60, width: 60, backgroundColor: 'pink' }}></View>
            <View style={{ flex: 1, marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={{ color: 'white' }}>
                        Song name
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                        <Text style={{ color: 'gray' }}>Song</Text>
                        <Text style={{ color: 'gray', marginHorizontal: 4 }}>•</Text>
                        <Text style={{ color: 'gray' }}>Artist name</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        color: 'white',
        padding: 10
    },
    herdaerContainer: {
        // flex: 1,
        backgroundColor: 'black',
        color: 'white',
        padding: 10
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }
})