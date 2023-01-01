import React ,{useEffect} from 'react';
import {StyleSheet,View, Text,Image, ImageBackground} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';


export const Splash = ({navigation}) =>{

    useEffect(() => {    

    getData()
  

    });

const getData =async()=>{

  const session = await EncryptedStorage.getItem("UserData");
  if (session !== null) {
    console.log(session)
    setTimeout(()=>{navigation.navigate('HomeScreen')},2000)

}else{
    setTimeout(()=>{navigation.navigate('HomeScreen')},2000)

}
  


} 

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