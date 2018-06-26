import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class List extends Component {
    renderItem = (todo, i) => {
        const {onDelItem, onToggleItem} = this.props;
        const {text, done} = todo;
        const textStyle = done ? styles.textDone : styles.textUndone;
        const lineStyle = done ? styles.itemDone : styles.itemUndone;

        return (
            <View key={i}>
                <TouchableOpacity
                    style={[styles.item, lineStyle]}
                    onPress={() => onToggleItem(i)}
                >
                    <Text style={textStyle}>{text}</Text>
                    <TouchableOpacity style={{flex: 1}} onPress={() => onDelItem(i)}>
                        <Text style={styles.delIcon}>X</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        const {list} = this.props;

        return (
            <View>
                {list.map(this.renderItem)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 5,
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemDone: {
        backgroundColor: 'whitesmoke',
    },
    itemUndone: {
        backgroundColor: 'white',
    },
    textUndone: {
        color: 'black',
        flex: 11,
    },
    textDone: {
        color: 'grey',
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
        flex: 11,
    },
    delIcon: {
        textAlign: 'center',
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
    }
});