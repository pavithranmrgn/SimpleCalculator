import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";


const CalculatorComponent = (props) => {
    return (
        <View style={{ justifyContent: 'flex-end' }}>
            <View style={styles.container}>
                <Text style={styles.lastNumStyle}>{props.calculator.lastNum}</Text>
                <Text style={styles.currentNumStyle}>{props.calculator.currentNum}</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.rowView}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff', minWidth: '37%' }]} onPress={() => props.onClickInput("C")}>
                        <Text style={styles.textStyle}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff', minWidth: '37%' }]} onPress={() => props.onClickInput("DEL")}>
                        <Text style={styles.textStyle}>DEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#FFA500' }]} onPress={() => props.onClickInput("/")}>
                        <Text style={[styles.textStyle, { color: 'white', fontSize: 28 }]}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowView}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => props.onClickInput("7")}>
                        <Text style={styles.textStyle}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => props.onClickInput("8")}>
                        <Text style={styles.textStyle}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => props.onClickInput("9")}>
                        <Text style={styles.textStyle}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#FFA500' }]} onPress={() => props.onClickInput("*")}>
                        <Text style={[styles.textStyle, { color: 'white', fontSize: 28 }]}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowView}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => props.onClickInput("4")}>
                        <Text style={styles.textStyle}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => props.onClickInput("5")}>
                        <Text style={styles.textStyle}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => props.onClickInput("6")}>
                        <Text style={styles.textStyle}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#FFA500' }]} onPress={() => props.onClickInput("-")}>
                        <Text style={[styles.textStyle, { color: 'white', fontSize: 28 }]}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowView}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => props.onClickInput("1")}>
                        <Text style={styles.textStyle}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => props.onClickInput("2")}>
                        <Text style={styles.textStyle}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => props.onClickInput("3")}>
                        <Text style={styles.textStyle}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#FFA500' }]} onPress={() => props.onClickInput("+")}>
                        <Text style={[styles.textStyle, { color: 'white', fontSize: 28 }]}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowView}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff', minWidth: '36%' }]} onPress={() => props.onClickInput("0")}>
                        <Text style={styles.textStyle}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff', minWidth: '37%' }]} onPress={() => props.onClickInput(".")}>
                        <Text style={styles.textStyle}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#FFA500' }]} onPress={() => props.onClickInput("=")}>
                        <Text style={[styles.textStyle, { color: 'white', fontSize: 28 }]}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        maxWidth: '100%',
        minHeight: '45%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    currentNumStyle: {
        maxHeight: 45,
        color: '#00b9d6',
        margin: 15,
        fontSize: 35,
    },
    buttons: {
        width: '100%',
        height: '35%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        borderColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '24%',
        minHeight: '54%',
        flex: 2,
    },
    lastNumStyle: {
        color: '#7c7c7c',
        fontSize: 20,
        marginRight: 10,
        alignSelf: 'flex-end',
    },
    textStyle: {
        color: '#7c7c7c',
        fontSize: 28,
    },
    rowView: {
        flexDirection: 'row',
        width: '100%',
        height: '50%'
    }
})

export default CalculatorComponent;