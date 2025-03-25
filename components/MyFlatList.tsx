import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


function MyFlatList() {
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
                 <Text style={{marginTop:10,fontSize:20}}>List with flat list</Text>
                 <FlatList  data={users}
                 renderItem={({item}) => <Text style={styles.myItem}>{item.name} </Text>}
                 keyExtractor={item => item.id}

                  />
           </View>
    
       
      )
}

const styles = StyleSheet.create({
   myItem :{
    fontSize:20,
    padding: 10,
    color:"#fff",
    backgroundColor: "blue",
    borderWidth:1,
    margin:10
   }
});

export default MyFlatList;