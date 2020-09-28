import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'
import Headernoitification from './Headernoitification';

var data4 = [
    {
        id: '21',
        status: true,
        title: 'Năng lực chung nhân viên Năng lực chung nhân viên Năng lực chung nhân viên Năng lực chung nhân viên',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '22',
        status: true,
        title: 'Năng lực chung về lãnh đạo Năng lực chung về lãnh đạo Năng lực chung về lãnh đạo Năng lực chung về lãnh đạo',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '23',
        status: false,
        title: 'Năng lực chung về xử lý ',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '24',
        status: true,
        title: 'Năng lực chung về xử lý',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '25',
        status: true,
        title: 'helo',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '26',
        status: true,
        title: 'helo',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '27',
        status: true,
        title: 'helo',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },
    {
        id: '28',
        status: true,
        title: 'helo',
        title11: 'Thông báo hệ thống',
        time: '3h21'
    },

]
export default function Noitification() {



    const renderNoitice = ({ item }) => {
        let color = item.status ? "#e5effb" : "#FFFFFF"
        return (
            <TouchableOpacity onPress={() => alert('hello')}>
                <Div className='col-12' style={{ backgroundColor: color, paddingLeft: 16, padding: 16, }}>
                    <Div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <P size={16} bold={true}>{item.title11}</P>
                        <P color='#81888F'>{item.time}</P>
                    </Div>
                    <P style={{ paddingTop: 8 }} size={14} numberOfLines={1} ellipsizeMode='tail'>{item.title}</P>

                </Div>

            </ TouchableOpacity>
        )
    }
    return (
        <Div className='col-12'>
            <Headernoitification></Headernoitification>
            <ScrollView>
                <FlatList
                    data={data4}
                    renderItem={renderNoitice}
                    keyExtractor={item => item.id}

                    horizontal={false}
                />
            </ScrollView>
        </Div>
    )
}



