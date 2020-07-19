import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity, Alert, Linking, ScrollView, TextInput } from 'react-native';

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        link: 'https://i.a4vn.com/2018/11/26/cung-ngam-hinh-anh-nhung-nguoi-dep-co-khuon-mat-mang-ti-le-can-d-103d74.jpg',
    },
    {
        id: '2',
        link: 'https://keomoi.com/wp-content/uploads/2019/05/anh-gai-dep-de-thuong-hinh-6.jpg',
    },
    {
        id: '3',
        link: 'https://camode.vn/upload/member/5-15401958975_300x300.jpg',
    },
    {
        id: '4',
        link: 'https://i.pinimg.com/736x/6b/92/a9/6b92a9f0649285726f7d0186024d1a8d.jpg',
    },
    {
        id: '5',
        link: 'https://i.a4vn.com/2018/11/26/cung-ngam-hinh-anh-nhung-nguoi-dep-co-khuon-mat-mang-ti-le-can-d-103d74.jpg',
    },


];



const Item = ({ link }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{link}</Text>
    </View>
);



export default function Screen1({ navigation }) {
    // const onPress = () => { alert('tuan dep trai') };

    const renderItem = ({ item }) => {

        return (
            <View style={{ width: '50%', marginTop: 5, borderRadius: 5, flexDirection: 'row', paddingLeft: 5 }}>

                <Image style={{ height: 200, width: '100%', resizeMode: 'cover', borderRadius: 15, }} source={{ uri: item.link }} />
                {/* <Image style={{ height: 150, width: '100%', resizeMode: 'cover', borderRadius: 15, marginLeft: 5 }} source={{ uri: item.link }} /> */}
            </View >
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%', paddingLeft: 20, padding: 10 }}>
                    {/* <TouchableOpacity
                        style={{ width: 40, height: 30, }}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Ionicons name="md-arrow-round-back" size={32} color="black" />
                    </TouchableOpacity> */}
                    <TextInput style={{ padding: 10, width: '80%', borderWidth: 1, borderColor: '#BBBBBB', borderRadius: 10 }} placeholder="Tìm kiếm" />
                    <TouchableOpacity
                        style={{ width: 40, height: 30, }}
                        onPress={() => alert('hello')}
                    >
                        <Ionicons name="md-search" size={32} color="black" />
                    </TouchableOpacity>

                </View>
                {/* <View style={styles.background}>
          <Text>tuan</Text>
        </View> */}
                <ScrollView >
                    <View style={styles.content}>
                        <View style={styles.content1}>
                            <Image style={{ height: 100, width: 100, borderRadius: 50 }}
                                source={{ uri: 'https://i.a4vn.com/2018/11/26/cung-ngam-hinh-anh-nhung-nguoi-dep-co-khuon-mat-mang-ti-le-can-d-103d74.jpg' }} />
                            <View style={styles.content12}>
                                <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>Tuan dep trai</Text>
                                <Text style={{ color: '#BBBBBB', fontSize: 16, paddingLeft: 5, fontStyle: 'italic' }}>photograpers</Text>
                                <View style={styles.content123}>
                                    <TouchableOpacity
                                        style={{ width: 100, height: 30, backgroundColor: '#3366FF', alignItems: 'center', borderRadius: 15, justifyContent: 'center' }}
                                        onPress={() => navigation.navigate('Screen3')}
                                    >
                                        <Text style={{ fontStyle: 'italic', fontSize: 16, textAlignVertical: 'center', justifyContent: 'center', alignItems: 'center' }}>Follow</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{ width: 60, height: 30, backgroundColor: '#3399FF', alignItems: 'center', borderRadius: 15, justifyContent: 'center', marginLeft: 8 }}
                                        onPress={() => navigation.navigate('Screen5')}
                                    >
                                        <Ionicons name="md-paper-plane" size={25} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={styles.content2}>
                        <View style={styles.content22}>
                            <Text style={{ color: 'black', fontSize: 26 }}>210</Text>
                            <Text style={{ color: '#BBBBBB', fontSize: 20, fontStyle: 'italic' }}>photo</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 26 }}>15K</Text>
                            <Text style={{ color: '#BBBBBB', fontSize: 20, fontStyle: 'italic' }}>follow</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 26, justifyContent: 'center', paddingLeft: 25 }}>601</Text>
                            <Text style={{ color: '#BBBBBB', fontSize: 20, fontStyle: 'italic' }}>following</Text>
                        </View>
                    </View>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        style={{ width: '100%' }}
                        numColumns={2}
                        horizontal={false}

                    />
                </ScrollView>
                {/* <View style={styles.bottom}>
                    <Ionicons name="md-apps" size={32} color="black" />
                    <Ionicons name="md-add-circle" size={32} color="black" />
                    <Ionicons name="md-contact" size={32} color="black" />
                </View> */}
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        // alignItems: 'center',
        // justifyContent: 'center',
    },
    headder: {
        paddingTop: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 15
    },
    content: {
        height: 200,
        flexDirection: 'row',
        width: '100%'
    },
    content1: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 20

    },
    content2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: -50,
        paddingLeft: 20

    },
    content12: {
        height: 100,
        marginLeft: 15,



    },
    bottom: {
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 70,
        width: '100%',
        bottom: 0,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    content123: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        fontStyle: 'italic'
    },
    background: {
        backgroundColor: 'red',
        width: '100%',
        height: 300,
    },
});
