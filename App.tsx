/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Text,
  View,
  Alert,
} from 'react-native';
import MyCompanyData from './components/MyCompanyData';
import SimpleForm from './components/SimpleForm';
import MyFlatList from './components/MyFlatList';
import MyCustomList from './components/MyCustomList';
import GridDynamicData from './components/GridDynamicData';
import GirdStaticData from './components/GirdStaticData';
import MyScrollView from './components/MyScrollView';
import ComponentLoopWithPropsFlatList from './components/ComponentLoopWithPropsFlatList';
import MySectionList from './components/MySectionList';
import MyClassComponent from './components/MyClassComponent';


function App(): React.JSX.Element {

  const handleChange = (a:string)=>{
   // console.warn("Button clicked");
  // Alert.alert('You tapped the button!');
  Alert.alert(a);
  }

  return (
          <View>
            {/* <Text style={{fontSize:30}}>Hello React Native</Text> */}
            {/* <Text style={{fontSize:30}}>Niloy</Text>
            <Text style={{fontSize:30}}>Like</Text>
            <Text style={{fontSize:30}}>Share</Text> */}
            {/* <MyCompanyData/>
            <UserData/>
            <Button title='Submit' onPress={()=>handleChange('hello')} color={'green'} /> */}
            {/* <SimpleForm/> */}

            {/* <MyScrollView/> */}

            {/* <MyFlatList/> */}

            {/* <MyCustomList/> */}

            {/* <GirdStaticData/> */}

            {/* <GridDynamicData/> */}
            {/* <ComponentLoopWithPropsFlatList/> */}
            {/* <MySectionList/> */}
            <MyClassComponent/>

          </View>
  );
}


const UserData = ()=>{
  return (
           <View>
               <Text style={{fontSize:12}}>Name: Niloy</Text>
               <Text style={{fontSize:12}}>Age: 29</Text>
               <Text style={{fontSize:12}}>Country: Bnagladesh</Text>
           </View>
  );
}

export default App;
