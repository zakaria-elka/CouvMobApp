import React  from 'react';
import {StyleSheet,View, Text,Image} from 'react-native';
import { FormSearch } from './FormSearch';




export const Home = () =>{

  return(

    
    <View style={styles.container}>
    
    <View  style={styles.viewlogo} >

    <Image  style={styles.image} 
      source={require('../img/logo.png')}
    />
    <Text style={styles.text}>Dini Me3ak</Text>


    </View>
    <FormSearch/>
    
   </View>
   
  
  )

}

const styles = StyleSheet.create({
  container: {

    flex: 1,
 

  },
  viewlogo:{

    marginTop:50,
     marginLeft:20,
     display:'flex',
     flexDirection:'row',

  },
  image:{
     
     height: 100,
     width: 100,

  },
  text:{
   
    marginTop:30,
    paddingLeft:10,
    fontSize:30,
    fontFamily:'serif'
    
     
  }


});


