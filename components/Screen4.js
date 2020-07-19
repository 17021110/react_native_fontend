import React, { Component } from 'react'
import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'

export default function Screen4({ navigation }) {

    return (
        <SafeAreaView style={{ marginTop: 50, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <View>
                <Text style={{ fontSize: 32, fontWeight: "bold" }}>Đăng nhập</Text>
            </View>
            <View style={{ width: '70%', marginTop: 20, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', }}>
                {/* <Text >Tên đăng nhập</Text> */}
                <TextInput style={{ padding: 10, width: '100%', borderWidth: 1, borderColor: '#BBBBBB', borderRadius: 10 }} placeholder="Tên đăng nhập" />
            </View>
            <View style={{ width: '70%', marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {/* <Text>Mật Khẩu</Text> */}
                <TextInput style={{ padding: 10, width: '100%', borderWidth: 1, borderColor: '#BBBBBB', borderRadius: 10 }} placeholder="Mật Khẩu" secureTextEntry={true} />
            </View>
            <View style={{ padding: 15 }}>
                <Button
                    onPress={() => alert('helllo')}
                    title="Đăng nhập"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ width: 60, height: 30, backgroundColor: '#3399FF', alignItems: 'center', borderRadius: 15, justifyContent: 'center', marginLeft: 8 }}
                    onPress={() => navigation.navigate('Screen5')}>

                    <Text>Đăng ký</Text>
                </TouchableOpacity>
                <Text>/</Text>
                <TouchableOpacity
                    style={{ width: 100, height: 30, backgroundColor: '#3399FF', alignItems: 'center', borderRadius: 15, justifyContent: 'center', marginLeft: 8 }}
                    onPress={() => alert('Screen5')}>

                    <Text>Quên mật khẩu</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

