import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default class Footer extends Component {

    render() {
        const { children, onRemoveDone } = this.props;

        return (
            <TouchableOpacity style={styles.footer} onPress={onRemoveDone}>
                <Text style={styles.title}>{children}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        borderTopColor: 'lightgrey',
        borderTopWidth: 1,
        padding: 15,
    },
    title: {
        textAlign: 'center',
        color: 'red',
    }
});