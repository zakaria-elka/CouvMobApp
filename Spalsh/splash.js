import React ,{useEffect} from 'react';
import {StyleSheet,View, Text,Image, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Splash = ({navigation}) =>{

    useEffect(() => {    


      AsyncStorage.getItem('UserData').then(
        value=>{
          if(value != null){
            setTimeout(()=>{navigation.navigate('HomeScreen')},1000)
            }
            else{
              setTimeout(()=>{navigation.navigate('LoginScreen')},1000)
            }
          }
        
        
        )
        
   
 

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