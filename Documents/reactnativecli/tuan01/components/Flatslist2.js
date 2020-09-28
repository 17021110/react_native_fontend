import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'

import Headcarditems from './Headcarditems';



const data = [
    {
        id: '6',
        link: require('../img/5.png'),
        title: 'Năng lực chung nhân viên'
    },
    {
        id: '7',
        link: require('../img/5.png'),
        title: 'Năng lực chung về lãnh đạo'
    },
    {
        id: '8',
        link: require('../img/5.png'),
        title: 'Năng lực chung về xử lý '
    },
    {
        id: '9',
        link: require('../img/5.png'),
        title: 'Năng lực chung về xử lý'
    },
    {
        id: '10',
        link: require('../img/5.png'),
        title: 'helo'
    },


];
export default function Flatslist2() {

    const renderItem1 = ({ item }) => {

        return (
            <Div >
                <Div style={styles.DivCard}>
                    <Image style={styles.Imgcard} source={item.link} />
                    <P style={{ paddingLeft: 8, padding: 8 }} size={14}>{item.title}</P>
                </Div>
            </ Div>
        )
    }
    return (
        <Div style={{ flexDirection: 'row', marginTop: 16 }}>
            <Headcarditems color="#4daa5c" text='Năng lực chuyên môn' icon='ios-book-outline' />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <FlatList
                    data={data}
                    renderItem={renderItem1}
                    keyExtractor={item => item.id}
                    horizontal={true}

                />
            </ScrollView>
        </Div>
    )

}
