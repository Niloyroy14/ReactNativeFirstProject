import React from 'react';
import { View,StyleSheet, Text, ScrollView } from 'react-native';

function MyCustomList() {

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
        },
        {
            id:11,
            name:"Rafa"
        },
        {
            id:12,
            name:"Rubel"
        },
        {
            id:13,
            name:"Sourav"
        }
    ];

  return (
   
    <View>
       <Text style={{marginTop:10,fontSize:20}}>List with Map function</Text>
       <ScrollView style={{marginBottom:50}}>
             {
                users.map((item)=><Text key={item.id} style={styles.myItem}>{item.name}</Text>)
            }
       </ScrollView>
    </View>
          

  )
}

const styles = StyleSheet.create({
    myItem :{
     fontSize:24,
     padding: 10,
     color:"#fff",
     backgroundColor: "blue",
     borderColor: "black",
     borderWidth:1,
     margin:10,
    
    }
 });
 

export default MyCustomList;