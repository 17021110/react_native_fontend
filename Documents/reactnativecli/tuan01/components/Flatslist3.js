import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'

import Headcarditems from './Headcarditems';


const data1 = [
    {
        id: '11',
        link: require('../img/6.png'),
        title: 'Năng lực chung nhân viên'
    },
    {
        id: '12',
        link: require('../img/6.png'),
        title: 'Năng lực chung về lãnh đạo'
    },
    {
        id: '13',
        link: require('../img/6.png'),
        title: 'Năng lực chung về xử lý '
    },
    {
        id: '14',
        link: require('../img/6.png'),
        title: 'Năng lực chung về xử lý'
    },



];
export default function Flatslist3() {


    const renderItem2 = ({ item }) => {

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
            <Headcarditems color="#f2993e" text='Năng lực bổ trợ' icon='clipboard-outline' />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <FlatList
                    data={data}
                    renderItem={renderItem2}
                    keyExtractor={item => item.id}
                    horizontal={true}

                />
            </ScrollView>
        </Div>
    )
}
