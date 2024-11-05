import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { color, ScreenWidth } from "@rneui/base";
import LinearGradient from "react-native-linear-gradient";

export default function AddAccount({ navigation }) {
    return <SafeAreaView style={styles.container}>
        <View style={{ position: 'relative', flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                    Add account
                </Text>
            </View>
            <View style={[{ alignItems: 'flex-end', position: 'absolute', right: 10 }]}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.goBack()
                    // navigation.reset({
                    //     index: 0,
                    //     routes: [{ name: 'Root' }],
                    // });
                }}>
                    <AntDesign name="close" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
        <LinearGradient colors={['dimgray', 'black', 'black', 'black']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 100 }}>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 38, fontWeight: 'bold' }}>
                    Million of songs.{"\n"}
                    Free on XXXX.
                </Text>
            </View>
            <View style={{ marginTop: 80 }}>
                <TouchableOpacity style={{ backgroundColor: 'lime', width: ScreenWidth - 50, alignItems: 'center', borderRadius: 30 }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginVertical: 15 }}>
                        Sign up for free
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={{ width: ScreenWidth - 50, alignItems: 'center', borderRadius: 30, borderColor: 'gray', borderWidth: 1 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginVertical: 15 }}>
                        Continue with Google
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={{ width: ScreenWidth - 50, alignItems: 'center', borderRadius: 30, borderColor: 'gray', borderWidth: 1 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginVertical: 15 }}>
                        Continue with Facebook
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 40 }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                    Log in
                </Text>
            </View>
            <View style={{ marginTop: 80 }}>
                <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
                    While you are signed in, anyone else using {"\n"}
                    this device will be able to access your{"\n"}
                    account.
                </Text>
            </View>
        </LinearGradient>
    </SafeAreaView >
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        color: 'white',
        fontStyle: { color: 'white' },
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