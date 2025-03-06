import React from 'react'
import { Text, View,StyleSheet } from 'react-native';

function GridDynamicData() {

    const users = [
        {
            id:1,
            name:"Niloy"
        },
        {
            id:2,
            name:"Mim"
        },
        {
            id:3,
            name:"Rafa"
        },
        {
            id:4,
            name:"Rubel"
        },
        {
            id:5,
            name:"Sourav"
        },
        {
            id:6,
            name:"Niloy"
        },
        {
            id:7,
            name:"Mim"
        },
        {
            id:8,
            name:"Rafa"
        },
        {
            id:9,
            name:"Rubel"
        },
        {
            id:10,
            name:"Sourav"
        }
    ];

  return (
    
    <View>
         <Text style={{marginTop:10,fontSize:31}}>Gird with Dynamic Data</Text>
         <View style={{flex:1, flexDirection: 'row', flexWrap:'wrap'}}>
               { users.map((item)=> <Text style={mystyles.item} key={item.id}>{item.name}</Text>)}
         </View>
        
    </View>

  )
}

const mystyles= StyleSheet.create({
          item:{
            fontSize:20,
            color:"#fff",
            backgroundColor: "blue",
            margin:5,
            padding:5,
            height:120,
            width:120,
             textAlignVertical:'center',
             textAlign:'center'
          }
});

export default GridDynamicData