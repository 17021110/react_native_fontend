import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'
import Headernoitification from './Headernoitification';
import HeaderCategory from './HeaderCategory'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './Styles';




var data5 = [
    {
        id: '31',
        name: 'ios-person-outline',
        title: 'Thông tin tài khoản',
        link: require('../img/nen.png'),

    },
    {
        id: '32',
        name: 'ios-document-text-outline',
        title: 'tài liệu',
        link: require('../img/nen.png'),

    },
    {
        id: '33',
        name: 'desktop-outline',
        title: 'giới thiệu',
        link: require('../img/nen.png'),

    },
    {
        id: '34',
        name: 'md-reader-outline',
        title: 'Liên hệ',
        link: require('../img/nen.png'),

    },
    {
        id: '35',
        name: 'headset',
        title: 'hỗ trợ',
        link: require('../img/nen.png'),

    },
    {
        id: '36',
        name: 'copy-outline',
        title: 'hỏi đáp',
        link: require('../img/nen.png'),

    },

]

export default function Category() {


    const renderCategory = ({ item }) => {

        return (
            <Div className='col' style={styles.category} shadowHeight={true} shadow={true}>
                <ImageBackground source={item.link} className='col-2' style={styles.imgCategory}>
                    <Icon name={item.name} color="#FFFFFF" size={24} />
                </ImageBackground>
                <Div style={styles.DivCategory}>
                    <P size={14} style={{ lineHeight: 22, fontWeight: '600' }}>{item.title}</P>
                    <Icon name="chevron-forward" color="#AAAAAA" size={20} />
                </Div>
            </Div>
        )
    }
    return (
        <Div style={{ backgroundColor: '#e5effb', height: '100%' }}>
            <HeaderCategory />
            <ScrollView >
                <FlatList
                    data={data5}
                    renderItem={renderCategory}
                    keyExtractor={item => item.id}

                    horizontal={false}
                />
            </ScrollView>
        </Div>
    )

}

