import React, { Fragment, useState,useEffect}  from 'react';
import {StyleSheet,View, Text,Image , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';


export const Menu = () =>{

    const [opClose,setOpClose] = useState(0)
    const navigation = useNavigation();
    // const session = EncryptedStorage.getItem("UserData");
   
    
  
    


    return(


      <View style={styles.menu}>  
 
   
    {opClose?
     <View style={styles.container}>
      
       <TouchableOpacity onPress={()=>setOpClose(!opClose)}>
      <Image  style={styles.image2} 
      source={require('../../img/close.png')}
    />
     
     </TouchableOpacity>

<View style={styles.userinfo}>
     <Image  style={styles.userpic} 
      source={require('../../img/user.png')}
    />
      <Text style={{fontSize:20,marginBottom:50,color:'black'}}></Text>
</View>


   <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")} style={styles.list} >
    <Image  style={{width:25,height:25}} 
      source={require('../../img/home.png')}
    />
    <Text style={{paddingLeft:10,paddingTop:5,fontWeight:'bold'}}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>console.log('toz')} style={styles.list} >
    <Image  style={{width:25,height:25}} 
      source={require('../../img/offer.png')}
    />
    <Text style={{paddingLeft:10,paddingTop:5,fontWeight:'bold'}}>My offer</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>console.log('toz')} style={styles.list} >
    <Image  style={{width:25,height:25}} 
      source={require('../../img/pencil-alt.png')}
    />
    <Text style={{paddingLeft:10,paddingTop:5,fontWeight:'bold'}}>Add offer</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.list} >
    <Image  style={{width:25,height:25}} 
      source={require('../../img/cog.png')}
    />
    <Text style={{paddingLeft:10,paddingTop:5,fontWeight:'bold'}}>Settings</Text>
    </TouchableOpacity>





    <Text style={{paddingLeft:'25%',paddingTop:'150%',fontSize:10,fontWeight:'bold'}}>Dini Me3ak Copyright*</Text>
        </View> 
        
        : 

        <TouchableOpacity onPress={()=>setOpClose(!opClose)}>
      <Image  style={styles.image1} 
      source={require('../../img/menu.png')}
    />
 
     
     </TouchableOpacity>}
    </View>

    )
  
  }


  const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      color:'black',
      backgroundColor:'#f8f9f9',
      
  
    },
    image2:{
     
        height: 20,
        width: 20,
        marginTop:10,
        marginLeft:160,
   
     },
     image1:{
     
        height: 30,
        width: 30,
        marginTop:10,
        marginLeft:150,
   
     },
     userpic:{
     
        height: 50,
        width: 50,
        marginBottom:10,
        borderRadius: 400/ 2,
        borderWidth: 1,
        borderColor:'black',
        
   
   
     },
     userinfo:{
     
       marginTop:30,
       alignItems:'center',
       justifyContent:'center',
   
     },
     menu:{
        position:"absolute",
        height:'100%',
        width:'50%',
        right:0,
      },
    list:{

      
      padding:5,
      display:'flex',
      flexDirection:'row',
      borderTopWidth:1,
      borderTopColor:'black',
      marginBottom:5,
     
      

    },
    
   


})