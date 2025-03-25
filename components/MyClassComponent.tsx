import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import StudentComponent from './StudentComponent';

type StateType = {
  name: string;
  age: number;
};

export default class MyClassComponent extends Component<{}, StateType> {

  constructor(props: {}){
    super(props);
    this.state ={
      name:"niloy",
      age:10,
    }
  }

  fruit = () =>{
    console.warn("Apple");
  }

  updateName(val: string){
    this.setState({name:val})
  }

  render() {
    return (
       <View> 
         <Text style={{fontSize:30,color:'red'}}>Class Component </Text>
         <Text style={{fontSize:30,color:'red'}}>{this.state.name}</Text>
         <TextInput placeholder='Enter Your Name:' onChangeText={(text)=>this.updateName(text)}/>
         <Button title='Press Me' onPress={this.fruit}/>
         <StudentComponent name={this.state.name}/>
       </View>
    )
  }
}
