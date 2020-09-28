import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image, TextInput } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './Styles'

export default class Headernoitification extends Component {
    render() {
        return (
            <Div className="col-12" style={styles.Headder}>

                <Div className='col-12' style={styles.Header} >
                    <Icon name="chevron-back" color="black" size={30} />
                    <P size={20} style={{ fontWeight: '600' }}>Thông báo chung</P>
                </Div>


            </Div>
        )
    }
}
