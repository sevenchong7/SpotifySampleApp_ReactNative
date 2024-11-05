import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PlayListData } from "../../../../data/data";

const Playlist = () => {
    const ItemRow = ({ items, index }) => {
        return (
            < View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <View style={styles.songpic}></View>
                    <Text style={styles.text}>
                        {items.name}
                    </Text>
                </TouchableOpacity>
            </View >


        );
    };

    return (
        <View>
            <FlatList
                scrollEnabled={false}
                data={PlayListData.slice(0, 6)}
                numColumns={2}
                columnWrapperStyle={styles.itemsrow}
                renderItem={({ item, index }) => <ItemRow items={item} />}
                keyExtractor={(item, index) => item.id}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    itemsrow: {
        flex: 1,
        justifyContent: "space-around"
    },
    row: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        // paddingHorizontal: 8,
        // paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: 'gray',
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5,
        flexDirection: 'row',
    },
    text: {
        fontSize: 14,
        margin: 8,
        color: 'white',
        textAlign: 'left',
    },
    songpic: {
        height: 50,
        width: 50,
        backgroundColor: 'pink',
        borderTopStartRadius: 5,
        borderEndStartRadius: 5
    }
});

export default Playlist;
