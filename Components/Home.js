import React  from 'react';
import {StyleSheet,View, Text,Image} from 'react-native';
import { FormSearch } from './FormSearch';
import { Logo } from './logo';
import { Menu } from './Menu/Menu';





export const Home = () =>{

  return(

    
    <View style={styles.container}>
      
    <Logo/>
    <FormSearch/>
    <Menu/>
    
   </View>
   
  
  )

}

const styles = StyleSheet.create({
  container: {

    flex: 1,
 

  },
 

});


