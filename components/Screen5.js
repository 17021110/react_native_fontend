import React, { Component } from 'react'
import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-datepicker'

export default class Screen5 extends Component {
    constructor(props) {
        super(props)
        this.state = { date: "" }
    }
    render() {
        return (
            <SafeAreaView style={{ marginTop: 50, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <View>
                    <Text style={{ fontSize: 32, fontWeight: "bold" }}>Đăng kí</Text>
                </View>
                <View style={{ width: '80%', marginTop: 20, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', }} >
                    {/* <Text >Tên đăng nhập</Text> */}
                    <TextInput style={{ padding: 10, width: '100%', borderWidth: 1, borderColor: '#BBBBBB', borderRadius: 10 }} placeholder="Tên đăng nhập" />
                </View>
                <View style={{ width: '80%', marginTop: 20, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', borderRadius: 10 }}>
                    {/* <Text >Tên đăng nhập</Text> */}
                    <DatePicker
                        style={{ width: '100%', borderRadius: 10 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="Ngày sinh"
                        format="DD-MM-YYYY"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                                borderRadius: 10
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderRadius: 10
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />

                </View>
                <View style={{ width: '80%', marginTop: 20, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', }}>
                    {/* <Text >Tên đăng nhập</Text> */}
                    <TextInput style={{ padding: 10, width: '50%', borderWidth: 1, borderColor: '#BBBBBB', borderRadius: 10 }} placeholder="Email" />
                    <TextInput style={{ padding: 10, width: '40%', borderWidth: 1, borderColor: '#BBBBBB', borderRadius: 10, paddingLeft: 10 }} placeholder="Số điện thoại" />
                </View>
                <View style={{ width: '80%', marginTop: 20, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', }}>
                    {/* <Text >Tên đăng nhập</Text> */}
                    <TextInput style={{ padding: 10, width: '100%', borderWidth: 1, borderColor: '#BBBBBB', borderRadius: 10 }} placeholder="Mật khẩu" secureTextEntry={true} />
                </View>
                <View style={{ width: '80%', marginTop: 20, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', }}>
                    {/* <Text >Tên đăng nhập</Text> */}
                    <TextInput style={{ padding: 10, width: '100%', borderWidth: 1, borderColor: '#BBBBBB', borderRadius: 10 }} placeholder="Nhập lại mật khẩu" secureTextEntry={true} />
                </View>
                <View style={{ padding: 15 }}>
                    <Button
                        onPress={() => this.props.navigation.goBack()}
                        title="Đăng kí"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>

            </SafeAreaView>
        )
    }
}
