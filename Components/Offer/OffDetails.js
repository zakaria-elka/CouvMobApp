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
    <Menu/>
    <View style={styles.main_container}  >
   
    <View style={styles.content_container} >

      <View >
        <Text style={{fontSize:25,fontWeight:"bold",fontStyle:"italic"}}>Depart: {offre.depart}</Text>
        <Text style={{fontSize:15}}>{offre.Dtime}</Text>
      </View>
<View >
        <Text style={{fontSize:25,fontWeight:"bold",fontStyle:"italic"}}>Arrival: {offre.des}</Text>
        <Text style={{fontSize:15}}>{offre.Atime}</Text>
      </View>
     
    </View>
    <View style={styles.content_container}>
        <Text style={{fontSize:17,fontWeight:"bold",fontStyle:"italic"}}>Depart Adress: Souk Lhad</Text>

      </View>
    <View style={styles.content_container}>
        <Text style={{fontSize:17,fontWeight:"bold",fontStyle:"italic"}}>Travel duration: 1h45min</Text>

      </View>
      
    
    <View style={styles.content_container2}>
    <Image  style={styles.userpic} 
      source={require('../../img/user.png')}
    />
        <Text style={{fontSize:25,fontWeight:"bold",fontStyle:"italic"}}>{offre.chauf}</Text>
        <Image  style={{width:30,height:30,marginLeft:"35%"}} 
      source={require('../../img/etoile.png')}
    />
    <Text style={{fontSize:25,fontStyle:"italic"}}>{offre.score}</Text>
      </View>
      <View style={styles.content_container}>
        <Text style={{fontSize:18,fontWeight:"bold",fontStyle:"italic"}}>DriverDescription: dahuki bzf
        </Text>

      </View>

      <View style={styles.content_container}>
        <Text style={{fontSize:17,fontWeight:"bold",fontStyle:"italic"}}>Car: Toyota Yaris</Text>

      </View>
     
    
      <View style={styles.content_container}>
        <Text style={{fontSize:17,color:"brown"}}>Price: {offre.price}</Text>

      </View>
      <View style={styles.content_container}>
      <Text style={{fontSize:15,fontWeight:"bold",fontStyle:"italic"}}>available place: {offre.place}</Text>

      </View>
    
    <Text style={{color:"black",fontSize:20,marginTop:5}}>Description</Text>
    <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      value={offre.desc}
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
      height: "90%",
      backgroundColor:'#f7f9f9',
      margin:20,
      borderRadius: 10,
      shadowColor: 'black',  
      elevation: 8,  
      flexDirection:"column",
      marginTop:50,
      zIndex:-1
      
      
    },
    
    content_container: {
      flexDirection:"column",
      margin:5,
      marginLeft:15,
      marginTop:18
      
    },

    content_container2: {
      flexDirection:"row",
      margin:5,
      marginLeft:15,
      marginTop:18
      
    },
  
  
   textAreaContainer: {
    borderColor:"black",
    borderWidth: 1,
    height: 130,
    
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
    borderRadius: 400/ 2,
    marginRight:20,
    borderWidth: 1,
    borderColor:'black',
    


 },
   
   
  })
  