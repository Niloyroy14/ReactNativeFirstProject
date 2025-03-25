import React from 'react';
import { View,Text, FlatList, StyleSheet } from 'react-native';
import UserData from './UserData';



function ComponentLoopWithPropsFlatList() {
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
        }
    ];



  return (
        <View>
             <Text style={{marginTop:10,fontSize:20}}>Component in Loop with Flat List</Text>
             <FlatList data={users} 
             renderItem={({item})=> <UserData item ={item}/>} />
        </View>
  )
}

// const UserData = (props) =>{
//     const item = props.item;
//     return (
//         <View style={myStyleSheet.box}>
//                 <Text style={myStyleSheet.item}>{item.id}</Text>
//                 <Text style={myStyleSheet.item}>{item.name}</Text>
//              </View>
//     )
// }

// const myStyleSheet = StyleSheet.create({
//            item:{
//             fontSize:40,
//             color:'black',
//             flex:1,
//             margin:2,
//             // backgroundColor:'green',
//             textAlign:'center'
//            },
//            box:{
//              flexDirection:'row',
//              borderWidth:2,
//              borderColor:'orange',
//              marginBottom:10
//            }
// });

export default ComponentLoopWithPropsFlatList;