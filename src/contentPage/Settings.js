import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import CurrentSong from "../general/Component/CurrentSong/currentSong";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Setting({ navigation }) {
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
                        Settings
                    </Text>
                    <View style={{ flexDirection: 'row', right: 0, position: 'absolute' }}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            // navigation.reset({
                            //     index: 0,
                            //     routes: [{ name: 'Home' }],
                            // });
                        }}>
                            <Feather name="search" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView style={[styles.container, { marginBottom: 20 }]}>
                <TouchableOpacity>
                    <View style={styles.row}>
                        <Ionicons name="person-circle-outline" size={35} color="white" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>
                                Account
                            </Text>
                            <Text style={{ color: 'gray' }}>
                                Username
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.row}>
                        <Ionicons name="musical-note" size={35} color="white" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>
                                Content and display
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Text style={{ color: 'gray' }}>Cnavas</Text>
                                <Text style={{ color: 'gray', marginHorizontal: 4 }}>•</Text>
                                <Text style={{ color: 'gray' }}>App language</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.row}>
                        <AntDesign name="sound" size={35} color="white" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>
                                Playback
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Text style={{ color: 'gray' }}>Gapless playback</Text>
                                <Text style={{ color: 'gray', marginHorizontal: 4 }}>•</Text>
                                <Text style={{ color: 'gray' }}>Autoplay</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.row}>
                        <Feather name="lock" size={35} color="white" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>
                                Privacy and social
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Text style={{ color: 'gray' }}>Recently played artists</Text>
                                <Text style={{ color: 'gray', marginHorizontal: 4 }}>•</Text>
                                <Text style={{ color: 'gray' }}>Followers and following</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.row}>
                        <Ionicons name="notifications-outline" size={35} color="white" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>
                                Notifications
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Text style={{ color: 'gray' }}>Push</Text>
                                <Text style={{ color: 'gray', marginHorizontal: 4 }}>•</Text>
                                <Text style={{ color: 'gray' }}>Email</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="devices" size={35} color="white" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>
                                Apps and devices
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Text style={{ color: 'gray' }}>Google Maps</Text>
                                <Text style={{ color: 'gray', marginHorizontal: 4 }}>•</Text>
                                <Text style={{ color: 'gray' }}>Spotify Connect control</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.row}>
                        <Feather name="arrow-down-circle" size={35} color="white" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>
                                Data-saving and offline
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Text style={{ color: 'gray' }}>Data Saver</Text>
                                <Text style={{ color: 'gray', marginHorizontal: 4 }}>•</Text>
                                <Text style={{ color: 'gray' }}>Offline mode</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.row}>
                        <Ionicons name="stats-chart" size={35} color="white" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>
                                Media quality
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Text style={{ color: 'gray' }}>Wi-Fi streaming quality</Text>
                                <Text style={{ color: 'gray', marginHorizontal: 4 }}>•</Text>
                                <Text style={{ color: 'gray' }}>Cellular streaming quality</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="information-outline" size={35} color="white" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>
                                Abount
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Text style={{ color: 'gray' }}>Version</Text>
                                <Text style={{ color: 'gray', marginHorizontal: 4 }}>•</Text>
                                <Text style={{ color: 'gray' }}>Privacy Policy</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
                    <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 25 }}>
                        <Text style={{ marginHorizontal: 20, marginVertical: 10, fontSize: 14, fontWeight: 'bold' }}>
                            Log out
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{ marginTop: 50 }}>
                <CurrentSong />
            </View>
        </View>
    </SafeAreaView>
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
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    }
})