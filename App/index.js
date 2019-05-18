import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';

import Row from './components/Row';
import Button from './components/Button';
import calculator, { initialState } from './utils/calculator';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        justifyContent: 'flex-end'
    },
    value: {
        color: '#FFF',
        fontSize: 40,
        textAlign: 'right',
        marginRight: 20,
        marginBottom: 10,
    }
});

const myLocaleString = (currentNum,usa) => {
    // define separators by locale boolean
    let dec = String(currentNum).split(/[.,]/)
       ,sep = usa ? ',' : '.'
       ,decsep = usa ? '.' : ',';
    // check required for an initial press of '.' char
    // which results in trying to reduce an empty array
    if(dec[0]) {
        return dec[0]
            .split('')
            .reverse()
            .reduce((prev,now,i) => {
                return i%3 === 0 ? prev+sep+now : prev+now;}
            )
            .split('')
            .reverse()
            .join('') + (dec[1] ? decsep+dec[1] :'');
    }
    return currentNum;
}

export default class App extends React.Component {
    state = initialState;

    handleTap = (type, value) => {
        this.setState(state => calculator(type, value, state));
    };

    render() {
        return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView>
                <Text style={styles.value}>
                    {myLocaleString(this.state.currentValue, true) }
                </Text>
                <Row>
                    <Button text="C" theme="secondary" onPress={() => this.handleTap("clear")} />
                    <Button text="+/-" theme="secondary" onPress={() => this.handleTap("posneg")} />
                    <Button text="%" theme="secondary" onPress={() => this.handleTap("percentage")} />
                    <Button text="/" theme="accent" onPress={() => this.handleTap("operator", "/")} />
                </Row>
                <Row>
                    <Button text="7" onPress={() => this.handleTap("number", 7)} />
                    <Button text="8" onPress={() => this.handleTap("number", 8)} /> 
                    <Button text="9" onPress={() => this.handleTap("number", 9)} />
                    <Button text="x" theme="accent" onPress={() => this.handleTap("operator", "*")} />
                </Row>
                <Row>
                    <Button text="4" onPress={() => this.handleTap("number", 4)} />
                    <Button text="5" onPress={() => this.handleTap("number", 5)} />
                    <Button text="6" onPress={() => this.handleTap("number", 6)} />
                    <Button text="-" theme="accent" onPress={() => this.handleTap("operator", "-")} />
                </Row>
                <Row>
                    <Button text="1" onPress={() => this.handleTap("number", 1)} />
                    <Button text="2" onPress={() => this.handleTap("number", 2)} />
                    <Button text="3" onPress={() => this.handleTap("number", 3)} />
                    <Button text="+" theme="accent" onPress={() => this.handleTap("operator", "+")} />
                </Row>
                <Row>
                    <Button text="0" size="double" onPress={() => this.handleTap("number", 0)} />
                    <Button text="." onPress={() => this.handleTap("number", ".")} />
                    <Button text="=" theme="accent" onPress={() => this.handleTap("equal")} />
                </Row>
            </SafeAreaView>
        </View>
        );
    }
}

