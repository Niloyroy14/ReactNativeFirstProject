import React from 'react';
import { View,Text, SectionList } from 'react-native';

function MySectionList() {
    const users  = [
         {
            id:1,
            name: "Niloy",
            data: ["QT","React Js","Next Js"]
         },
         {
            id:2,
            name: "Rubel",
            data: ["Laravel","React Js","Next Js"]
         },
         {
            id:3,
            name: "soumik",
            data: ["QT","React Js","Next Js"]
         },
         {
            id:4,
            name: "Ani",
            data: ["Next js","Vue Js","Js"]
         },
    ];
  return (
    <View>
         <Text style={{marginTop:10,fontSize:20}}>Section list</Text>
          <SectionList sections={users}
          renderItem={({item})=><Text style={{fontSize:20}}>{item}</Text>}
          renderSectionHeader={({section:{name}})=>(
            <Text style={{fontSize:25,color:'red'}}> {name}</Text>
          )}
          />
    </View>
  )
}

export default MySectionList;