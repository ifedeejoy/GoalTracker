import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
const Btn = (props) => {
    return (
        <Pressable
            android_ripple={{ opacity: 0.7 }}
            style={({ pressed }) => pressed && styles.pressedItem}
            onPress={props.onClick}>
            {props.children}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressedItem: {
        opacity: 0.7,
        borderRadius: 10,
    }
})

export default Btn;