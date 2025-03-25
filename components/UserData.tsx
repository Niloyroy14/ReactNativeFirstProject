import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

function UserData(props) {

const item = props.item;
    return (
        <View style={myStyleSheet.box}>
                <Text style={myStyleSheet.item}>{item.id}</Text>
                <Text style={myStyleSheet.item}>{item.name}</Text>
             </View>
    )
}

const myStyleSheet = StyleSheet.create({
    item:{
     fontSize:40,
     color:'black',
     flex:1,
     margin:2,
     // backgroundColor:'green',
     textAlign:'center'
    },
    box:{
      flexDirection:'row',
      borderWidth:2,
      borderColor:'orange',
      marginBottom:10
    }
});

export default UserData;