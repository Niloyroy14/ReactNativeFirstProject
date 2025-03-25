import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class StudentComponent extends Component {
  render() {
    console.log(this.props);
    return (
       <View>
         <Text style={{fontSize:30,color:'green'}}>Student Component</Text>
       </View>
    )
  }
}
