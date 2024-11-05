import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ReelData } from "../../../../data/data";

export default function Reel() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Explore you genres
            </Text>
            <FlatList
                data={ReelData}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={[styles.itemContainer, { backgroundColor: 'gray' }]}>
                            <Text style={styles.itemText}>{item.name}</Text>
                        </View>
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
        // padding: 100,
        // paddingVertical: 100,
        // paddingHorizontal: 20,
        width: 100,
        height: 200,
        marginRight: 15,
        justifyContent: 'flex-end'
    },
    itemText: {
        flexShrink: 1,
        color: 'white',
        padding: 10,
        fontSize: 14
    },
    row: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }

});