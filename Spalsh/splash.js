import React ,{useEffect} from 'react';
import {StyleSheet,View, Text,Image, ImageBackground} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const Splash = ({navigation}) =>{

    useEffect(() => {    

     setTimeout(()=>{navigation.navigate('HomeScreen')},2000)
 

    });

return(

<ImageBackground style={styles.container}
source={require('../img/splash.png')}
>

<Image  style={styles.image} 
      source={require('../img/logo.png')}
       />

</ImageBackground>


)


}


const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
     
  
    },  
    image:{
     
        height: 200,
        width: 200,
   
     },

})