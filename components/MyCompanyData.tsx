import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import externalStyles from '../mystyles';

function MyCompanyData() {
  return (
      <View>
         <Text style={{fontSize:20,fontWeight:'bold'}}>Company Name: KEI</Text>
         <Text style={externalStyles.textBox}>Company Origin: Japan</Text>
         <Text style={styles.textBox}>Country: Bangladesh</Text>
         <Text style={[styles.textBox, externalStyles.mybox, {borderStyle:'dotted'}]}>Adress: Baridhara J block, Jmalpur Tower</Text>
      </View>
     
  )
}

const styles= StyleSheet.create({
    textBox:{
        color:'black',
        fontWeight:'bold',
        backgroundColor:'red',
        height:100,
        padding: 10,
        marginBottom:10,
        fontSize:25,
        borderRadius:10,
        textAlignVertical:'center',
        borderColor:'black',
        borderWidth:2,
        margin:10
    },
    myaddress:{
        backgroundColor:'green'
    }
})

export default MyCompanyData;