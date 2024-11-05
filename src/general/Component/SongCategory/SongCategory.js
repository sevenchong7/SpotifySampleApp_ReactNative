import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ReelData } from "../../../../data/data";

export default function SongCategory() {

    const array = Array.from({ length: 51 }, (_, i) => i);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Browse all
            </Text>
            <FlatList
                scrollEnabled={false}
                data={array}
                numColumns={2}
                columnWrapperStyle={styles.itemsrow}
                // horizontal
                renderItem={({ item, index }) => (
                    <View>
                        <TouchableOpacity>
                            <View style={[styles.itemContainer, { backgroundColor: 'gray' }]}>
                                <Text style={styles.itemText}>{index}</Text>
                            </View>
                            {/* <Text style={{ color: 'white', marginTop: 10 }}>{item.name}</Text> */}
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.column}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    itemsrow: {
        flex: 1,
        justifyContent: 'space-between'
    },
    itemContainer: {
        flex: 1,
        borderRadius: 4,
        marginBottom: 15,
        minWidth: '48%',
        height: 100
    },
    itemText: {
        flexShrink: 1,
        color: 'white',
        padding: 10,
        fontSize: 16
    },
    column: {
        paddingTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }

});