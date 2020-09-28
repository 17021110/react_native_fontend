import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'

import Headcarditems from './Headcarditems';

const data2 = [
    {
        id: '16',
        link: require('../img/7.png'),
        title: 'Năng lực chung nhân viên'
    },
    {
        id: '17',
        link: require('../img/7.png'),
        title: 'Năng lực chung về lãnh đạo'
    },
    {
        id: '18',
        link: require('../img/7.png'),
        title: 'Năng lực chung về xử lý '
    },



];

export default function Flatslist4() {


    const renderItem3 = ({ item }) => {

        return (
            <Div >
                <Div style={styles.DivCard}>
                    <Image style={styles.Imgcard} source={item.link} />
                    <P style={{ paddingLeft: 8, padding: 8 }} size={14}>{item.title}</P>

                </Div>

            </Div >
        )
    }
    return (
        <Div style={{ flexDirection: 'row', marginTop: 16 }}>
            <Headcarditems color="#38a2f7" text='TCT VNPT Vinaphone' icon='ios-radio-outline' />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <FlatList
                    data={data2}
                    renderItem={renderItem3}
                    keyExtractor={item => item.id}
                    horizontal={true}

                />
            </ScrollView>
        </Div>
    )
}
