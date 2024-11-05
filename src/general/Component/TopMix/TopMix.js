import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PlayListData } from "../../../../data/data";

export default function TopMix() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your top mixes</Text>
            <FlatList
                data={PlayListData}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={[styles.itemContainer, { backgroundColor: 'gray' }]}>
                            <Text style={styles.itemText}>{item.name}</Text>
                        </View>
                        <Text style={{ color: 'white', marginTop: 10 }}>{item.name}</Text>
                    </TouchableOpacity>

                )}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.row}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    itemContainer: {
        borderRadius: 4,
        padding: 100,
        marginRight: 10,
        justifyContent: 'flex-end'
    },
    itemText: {
        position: 'absolute',
        color: 'white',
        paddingLeft: 20,
        paddingBottom: 20
    },
    row: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }

});