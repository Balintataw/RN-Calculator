import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
    text: {
        color: '#FFF',
        fontSize: 25
    },
    textSecondary: {
        color: '#060606',
    },
    button: {
        backgroundColor: '#333333',
        flex: 1,
        height: Math.floor(buttonWidth - 10), // dimensions can return floating numbers so needs to be floored
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Math.floor(buttonWidth),
        margin: 5,
    },
    buttonDouble: {
        width: screen.width / 2 - 10,
        flex: 0
    },
    buttonSecondary: {
        backgroundColor: '#A6A6A6'
    },
    buttonAccent: {
        backgroundColor: '#F09A36'
    }
});

export default ({ onPress, text, size, theme }) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (size === 'double') {
        buttonStyles.push(styles.buttonDouble);
    }

    if (theme === 'secondary') {
        buttonStyles.push(styles.buttonSecondary);
        textStyles.push(styles.textSecondary);
    } else if (theme === 'accent') {
        buttonStyles.push(styles.buttonAccent);
    }

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    )
}