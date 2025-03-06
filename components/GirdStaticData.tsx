import React from 'react';
import { Text, View,StyleSheet } from 'react-native';


function GirdStaticData() {
  return (

     <View>
             <Text style={{marginTop:10,fontSize:31}}>Gird with Dynamic Data</Text>
             <View style={{flex:1, flexDirection: 'row', flexWrap:'wrap'}}>
                <Text style={mystyles.item}>Niloy</Text>
                <Text style={mystyles.item}>Niloy</Text>
                <Text style={mystyles.item}>Niloy</Text>
                <Text style={mystyles.item}>Niloy</Text>
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
export default GirdStaticData