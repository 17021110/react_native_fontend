import React, { Component } from 'react'
import Routers from './components/Routers'
import { View, Text } from 'react-native'

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Routers />
      // <View>
      //   <Text >Hello</Text>
      // </View>
    )
  }
}
