import React, { useState } from 'react'
import { Text,TextInput,View, StyleSheet, Button } from 'react-native';
 
function SimpleForm() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [show, setShow] = useState(false);

const resetFormData = () =>{
  setShow(false);
  setName("");
  setEmail("");
  setPassword("");
}

  return (
          <View>
                <Text style={{fontSize:30}}>Handle From Input</Text>

                {/* <Text style={{fontSize:25,marginLeft:6}}>Your name is: {name}</Text> */}

                <TextInput style={styles.textInput} value={name}
                 placeholder='Enter your name:' onChangeText={(e)=>setName(e)} />

                <TextInput style={styles.textInput} value={email}
                placeholder='Enter your email:' onChangeText={(e)=>setEmail(e)} />

                <TextInput style={styles.textInput} value={password} secureTextEntry={true}
                placeholder='Enter your password:' onChangeText={(e)=>setPassword(e)} />

                 <View style={styles.submitButton}>
                      <Button color={"green"}  title='Submit' onPress={()=>setShow(true)} />
                 </View>
                <View>
                     <Button title='Clear' onPress={resetFormData}/>
                </View>
                

                  {
                    show ? <View>
                     <Text>User Name: {name}  </Text>
                     <Text>User Email: {email} </Text>
                      </View> : ''
                  }
         </View>
  )
}

const styles= StyleSheet.create({
          textInput:{
            fontSize:18,
            color:'red',
            borderWidth:2,
            borderColor:'blue',
            margin:10
          },
          submitButton:{
               marginBottom: 5
          },
          clearButton:{
            marginTop:10,
          },
})

export default SimpleForm;