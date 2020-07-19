import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity, TextInputComponent } from 'react-native';


export default class Screen2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            monney: 0,
            isVNDtoUSD: 1
        }
    }
    render() {
        return (
            <SafeAreaView>
                <View style={{ width: '80%', height: '100%', alignSelf: 'center' }}>
                    <Text>Please enter the value of the currency you want to convert</Text>
                    <TextInput style={styles.TextInput} onChangeText={text => this.setState({ monney: text })} />
                    <TouchableOpacity onPress={isVNDtoUSD => this.setState({ isVNDtoUSD: 1 })} style={[styles.TouchableOpacity, { backgroundColor: this.state.isVNDtoUSD ? '#c3c3c3' : '#ffffff' }]} >
                        <Text style={styles.Text}>VND to USD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={isVNDtoUSD => this.setState({ isVNDtoUSD: 0 })} style={[styles.TouchableOpacity, { backgroundColor: !this.state.isVNDtoUSD ? '#c3c3c3' : '#ffffff' }]}>
                        <Text style={styles.Text}>USD to VND</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.Text}>Current currency:</Text>
                        <Text style={styles.Text}>{this.state.monney} {this.state.isVNDtoUSD ? "VND" : "USD"}</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.Text}>Conversion currency:</Text>
                        <Text style={styles.Text}>{this.state.isVNDtoUSD ? this.state.monney / 23000 : this.state.monney * 23000} {this.state.isVNDtoUSD ? "USD" : "VND"}</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    TouchableOpacity: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'space-around'
    },
    Text: {
        alignSelf: 'center'
    },
    TextInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        marginTop: 20
    },
    ChangeText: {
        alignSelf: 'center',
        marginTop: 20
    }
});