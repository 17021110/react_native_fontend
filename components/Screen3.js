import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Screen3 extends Component {
    render() {
        return (
            <SafeAreaView style={{ marginTop: 40 }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingLeft: 20, padding: 10 }}>
                        <TouchableOpacity
                            style={{ width: 40, height: 30, }}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Ionicons name="md-arrow-round-back" size={32} color="black" />
                        </TouchableOpacity>


                        <TextInput style={{ padding: 10, width: '70%', borderWidth: 1, borderColor: '#BBBBBB', borderRadius: 10 }} placeholder="Tìm kiếm" />

                        <TouchableOpacity
                            style={{ width: 40, height: 30, }}
                            onPress={() => alert('hello')}
                        >
                            <Ionicons name="md-search" size={32} color="black" />
                        </TouchableOpacity>

                    </View>

                    <View style={{ width: '100%', height: 200, backgroundColor: '#9933FF', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 26, fontWeight: "bold", marginTop: -30, marginBottom: 10 }}>Thông tin cá nhân</Text>
                        <Image style={{ height: 100, width: 100, borderRadius: 50, marginTop: 0 }}
                            source={{ uri: 'https://i.a4vn.com/2018/11/26/cung-ngam-hinh-anh-nhung-nguoi-dep-co-khuon-mat-mang-ti-le-can-d-103d74.jpg' }} />

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 13, height: 50, borderBottomColor: '#CCCCCC', borderBottomWidth: 1 }}>
                        <Text>Tên</Text>
                        <TouchableOpacity
                            style={{ width: 60, height: 30, alignItems: 'center', borderRadius: 15, justifyContent: 'center', marginLeft: 8, flexDirection: 'row' }}
                            onPress={() => alert('hello')}
                        >
                            <Text>Thay đổi</Text>
                            <Ionicons name="md-color-filter" size={18} color="black" style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 13, height: 50, borderBottomColor: '#CCCCCC', borderBottomWidth: 1 }}>
                        <Text>Tên Đăng nhập</Text>
                        <TouchableOpacity
                            style={{ width: 60, height: 30, alignItems: 'center', borderRadius: 15, justifyContent: 'center', marginLeft: 8, flexDirection: 'row' }}
                            onPress={() => alert('hello')}
                        >
                            <Text>tuanak</Text>
                            <Ionicons name="md-color-filter" size={18} color="black" style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 13, height: 50, borderBottomColor: '#CCCCCC', borderBottomWidth: 1 }}>
                        <Text>Giới Tính</Text>
                        <TouchableOpacity
                            style={{ width: 50, height: 30, alignItems: 'center', borderRadius: 15, justifyContent: 'center', marginLeft: 8, flexDirection: 'row' }}
                            onPress={() => alert('hello')}
                        >
                            <Text>Nam</Text>
                            <Ionicons name="md-color-filter" size={18} color="black" style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 13, height: 50, borderBottomColor: '#CCCCCC', borderBottomWidth: 1 }}>
                        <Text>Số điện thoại</Text>
                        <TouchableOpacity
                            style={{ width: 80, height: 30, alignItems: 'center', borderRadius: 15, justifyContent: 'center', marginLeft: 8, flexDirection: 'row' }}
                            onPress={() => alert('hello')}
                        >
                            <Text>0365946422</Text>
                            <Ionicons name="md-color-filter" size={18} color="black" style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 13, height: 50, borderBottomColor: '#CCCCCC', borderBottomWidth: 1 }}>
                        <Text>Ngày sinh</Text>
                        <TouchableOpacity
                            style={{ width: 80, height: 30, alignItems: 'center', borderRadius: 15, justifyContent: 'center', marginLeft: 8, flexDirection: 'row' }}
                            onPress={() => alert('hello')}
                        >
                            <Text>05/01/1999</Text>
                            <Ionicons name="md-color-filter" size={18} color="black" style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 13, height: 50, borderBottomColor: '#CCCCCC', borderBottomWidth: 1 }}>
                        <Text>Email</Text>
                        <TouchableOpacity
                            style={{ width: 215, height: 30, alignItems: 'center', borderRadius: 15, justifyContent: 'center', marginLeft: 8, flexDirection: 'row' }}
                            onPress={() => alert('hello')}
                        >
                            <Text>Trantuan05011999@gmail.com</Text>
                            <Ionicons name="md-color-filter" size={18} color="black" style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
        )
    }
}