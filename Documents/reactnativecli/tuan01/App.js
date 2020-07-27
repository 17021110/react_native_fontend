import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import { Div, P, Input } from 'reactnative-ui-bootstrap'
import SearchBarExample from './components/SearchBarExample';
import Headcarditems from './components/Headcarditems';
import Noitification from './components/ Noitification';
import Detailsnoitification from './components/Detailsnoitification';
import Category from './components/Category'
import styles from './components/Styles';

import Filter from './components/Filter';
import Flatslist1 from './components/Flatslist1';
import Flatslist2 from './components/Flatslist2';
import Flatslist3 from './components/Flatslist3';
import Flatslist4 from './components/Flatslist4';


export default function App() {

  return (

    // <ListIconExample />

    <Div style={{ backgroundColor: '#f1f4fc' }}>

      {/* <SearchBarExample />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Flatslist1 />
        <Flatslist2 />
        <Flatslist3 />
        <Flatslist4 />
        <Div style={{ flexDirection: 'row', marginTop: 16 }}>
          <Headcarditems color="#065fd0" text='Sản phẩm dịch vụ của VNPT ' icon='ios-document-outline' />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          </ScrollView>
        </Div>
        <Div style={{ flexDirection: 'row', marginTop: 16 }}>
          <Headcarditems color="#9b51e0" text='Nội dụng ' icon='ios-grid-outline' />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          </ScrollView>
        </Div>
        <Div>

        </Div>

      </ScrollView> */}
      {/* <Filter /> */}
      {/* <Category /> */}
      <Noitification />
      {/* <Detailsnoitification /> */}
    </Div>
  )
}


