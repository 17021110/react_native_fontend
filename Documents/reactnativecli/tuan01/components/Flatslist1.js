import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'

import Headcarditems from './Headcarditems';



import styles from './Styles';



const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        link: require('../img/1.png'),
        title: 'Năng lực chung nhân viên'
    },
    {
        id: '2',
        link: require('../img/1.png'),
        title: 'Năng lực chung về lãnh đạo'
    },
    {
        id: '3',
        link: require('../img/a.jpg'),
        title: 'Năng lực chung về xử lý '
    },
    {
        id: '4',
        link: require('../img/a.jpg'),
        title: 'Năng lực chung về xử lý'
    },
    {
        id: '5',
        link: require('../img/a.jpg'),
        title: 'helo'
    },


];
export default function Flatslist1() {

    const renderItem = ({ item }) => {

        return (
            <Div >
                <Div style={styles.DivCard}>
                    <Image style={styles.Imgcard} source={item.link} />
                    <P style={{ paddingLeft: 8, padding: 8 }} size={14} >{item.title}</P>
                </Div>
            </Div >
        )
    }
    return (
        <Div style={{ flexDirection: 'row', marginTop: 16 }}>
            <Headcarditems color="#4eb8c3" text='Năng lực chung' icon='school-outline' />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </ScrollView>
        </Div>
    )

}
