import { Animated, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { color, ScreenWidth } from "@rneui/base";
import ButtonList from "../general/CustomButtom/ButtonList";
import { useRef, useState } from "react";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import CurrentSong from "../general/Component/CurrentSong/currentSong";

export default function News({ navigation }) {
    const scrollY = useRef(new Animated.Value(0)).current;
    const [currentTab, setCurrentTab] = useState(0)
    const buttonItems = [
        // { id: 0, label: 'All' },
        { id: 0, label: 'Music' },
        { id: 1, label: 'Podcasts & Shows' },
        // Add more items as needed
    ];

    // Define the threshold after which "What's New" will appear beside the back button
    const headerFadeThreshold = 80;

    return <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
            <View style={{ position: 'relative', flexDirection: 'row', marginBottom: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Home' }],
                        });
                    }}>
                        <Ionicons name="arrow-back" size={30} color="white" />
                    </TouchableOpacity>
                    <Animated.Text
                        style={{
                            marginLeft: 30,
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold',
                            opacity: scrollY.interpolate({
                                inputRange: [headerFadeThreshold - 20, headerFadeThreshold],
                                outputRange: [0, 1],
                                extrapolate: 'clamp',
                            }),
                            transform: [{
                                translateY: scrollY.interpolate({
                                    inputRange: [headerFadeThreshold - 20, headerFadeThreshold],
                                    outputRange: [10, 0],
                                    extrapolate: 'clamp',
                                })
                            }]
                        }}
                    >
                        What's New
                    </Animated.Text>
                </View>
            </View>
            <Animated.ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >

                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: 'white', fontSize: 38, fontWeight: 'bold' }}>
                        What's New
                    </Text>
                    <Text style={{ color: 'dimgray', fontSize: 15 }}>
                        The latest releases from artists, podcasts and shows you follow
                    </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <ButtonList buttons={buttonItems} currentTab={currentTab} setCurrentTab={setCurrentTab} />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>
                        New
                    </Text>
                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 100, height: 100, backgroundColor: 'pink' }}></View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'gray' }}>Time hrs ago</Text>
                            <Text style={{ color: 'white', fontSize: 24 }}>Songs name</Text>
                            <Text style={{ color: 'gray', fontSize: 16 }}>Artist name</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ color: 'gray', marginVertical: 10 }}>
                                Single
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Feather name="plus-circle" size={30} color="gray" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginHorizontal: 10 }}>
                                    <Feather name="arrow-down-circle" size={30} color="gray" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Entypo name="dots-three-vertical" size={30} color="gray" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ alignContent: 'flex-end' }}>
                            <TouchableOpacity>
                                <AntDesign name="play" size={40} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>
                        Earlier
                    </Text>
                    {[...Array(50)].map((_, index) => (
                        <MultipleSingleSong key={index} />
                    ))}
                </View>
            </Animated.ScrollView>
            <View style={{ marginTop: 50 }}>
                <CurrentSong />
            </View>
        </View>
    </SafeAreaView >
}

const MultipleSingleSong = () => {
    return <>
        <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 100, height: 100, backgroundColor: 'pink' }}></View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ color: 'gray' }}>Time hrs ago</Text>
                <Text style={{ color: 'white', fontSize: 24 }}>Songs name</Text>
                <Text style={{ color: 'gray', fontSize: 16 }}>Artist name</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <View>
                <Text style={{ color: 'gray', marginVertical: 10 }}>
                    Single
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Feather name="plus-circle" size={30} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 10 }}>
                        <Feather name="arrow-down-circle" size={30} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={30} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignContent: 'flex-end' }}>
                <TouchableOpacity>
                    <AntDesign name="play" size={40} color="white" />
                </TouchableOpacity>
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
        padding: 10
    },
    button: {
        // flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }
})