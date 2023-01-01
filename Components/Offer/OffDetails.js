import React , {useState} from 'react';
import { StyleSheet, View, Text, Image,Button,FlatList,TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Menu } from '../Menu/Menu';


export const OffDetails=({route})=> {

    const {offre} = route.params;
    const navigation = useNavigation();


    const Reserve=()=>{


        console.log(offre.id)

    }

return(
    <View style={styles.container}>
    <Menu />
    <View style={styles.main_container}  >
   
    <View style={styles.content_container} >

      <View >
        <Text style={{fontSize:25}}>{offre.depart}</Text>
        <Text style={{fontSize:15}}>{offre.Dtime}</Text>
      </View>
      <Image  style={styles.image} 
source={require('../../img/path2.png')}
/>
<View >
        <Text style={{fontSize:25}}>{offre.des}</Text>
        <Text style={{fontSize:15}}>{offre.Atime}</Text>
      </View>
    
    </View>
    <View style={styles.content_container}>
    <Image  style={styles.userpic} 
      source={require('../../img/user.png')}
    />
        <Text style={{fontSize:25}}>{offre.chauf}</Text>
      </View>
    
      <View style={styles.content_container}>
        <Text style={{fontSize:25,color:"brown"}}>{offre.price}</Text>
      </View>
      <View style={styles.content_container}>
    <Image  style={styles.userpic} 
      source={require('../../img/user.png')}
    />
        <Text style={{fontSize:25}}>{offre.chauf}</Text>
      </View>
    
    <Text style={{color:"black",fontSize:20,marginTop:"50%",}}>Description</Text>
    <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      value={offre.price}
      editable={false} 
      selectTextOnFocus={false}
    />
  </View>
  <Button title='Reserve' onPress={()=>Reserve()}/>

  </View>
  </View>
)    




}




/*
<View style={{marginRight:5}} >
      <View style={styles.content_container2}>
        <Text style={{fontSize:25,color:'brown'}}>{item.price}</Text>
        
      </View>
      <Text style={{fontSize:20,color:'blue'}}>{item.place} place</Text>
 
    
    </View>
*/

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
   
  
    },
    main_container: {
      height: "97%",
      backgroundColor:'#f7f9f9',
      margin:10,
      borderRadius: 10,
      shadowColor: 'black',  
      elevation: 8,  
      flexDirection:"column",
      
      
    },
    
    content_container: {
      flexDirection:"row",
      margin:5,
      marginLeft:15,
      marginTop:15
      
    },
  
  
    image:{
      marginRight:15,
      marginLeft:15,
      height: 55,
      width: 55,
  
   },
   textAreaContainer: {
    borderColor:"black",
    borderWidth: 1,
    height: 150,
    
  },
  textArea: {
    justifyContent: "flex-start",
    color:"black",
    fontWeight:"bold",
    fontSize:15,
    
    
  },

  userpic:{
     
    height: 30,
    width: 30,
    marginBottom:10,
    borderRadius: 400/ 2,
    marginRight:20,
    borderWidth: 1,
    borderColor:'black',
    


 },
   
   
  })
  