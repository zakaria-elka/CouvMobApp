import React , {useState} from 'react';
import { StyleSheet, View, Text, Image,Button,FlatList,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Menu } from '../Menu/Menu';


export const ShowOff =(props) => {
  
 

 
    
    const navigation = useNavigation();
    const [offer,setOffer]=useState([ 
      {
        id:"1",
        depart:"Agadir",
        des:"El Kelaa des Sraghna",
        Dtime:"15h00min",
        Atime:"18h30min",
        price:"90dhs",
        place:"4",
        chauf:"yassine",



      },
      {
        id:"2",
        depart:"Agadir",
        des:"El Kelaa des Sraghna",
        Dtime:"10h00min",
        Atime:"13h30min",
        price:"100dhs",
        place:"3",
        chauf:"Ahmed",



      },
      {
        id:"3",
        depart:"Agadir",
        des:"El Kelaa des Sraghna",
        Dtime:"12h00min",
        Atime:"16h30min",
        price:"120dhs",
        place:"3",
        chauf:"Aziz",



      }
    
    ])

   

    return (
      <View style={styles.container}>
      <Menu />
        <FlatList style={{marginTop:50,zIndex:-1}}
          data={offer}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => 
          <TouchableOpacity  style={styles.main_container} 
          onPress={()=>navigation.navigate("OffDetailsScreen",{offre:item})} >
   
        <View style={styles.content_container} >

          <View >
            <Text style={{fontSize:25}}>{item.depart}</Text>
            <Text style={{fontSize:15}}>{item.Dtime}</Text>
          </View>
          <Image  style={styles.image} 
  source={require('../../img/path.png')}
/>
<View >
            <Text style={{fontSize:25}}>{item.des}</Text>
            <Text style={{fontSize:15}}>{item.Atime}</Text>
          </View>
        
        </View>
        <View style={{marginRight:5}} >
          <View style={styles.content_container2}>
            <Text style={{fontSize:25,color:'brown'}}>{item.price}</Text>
            
          </View>
          <Text style={{fontSize:20,color:'blue'}}>{item.place} place</Text>
     
        
        </View>

      </TouchableOpacity>

      }
          onEndReachedThreshold={0.5}
          
        />
      </View>
    )
  
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
 

  },
  main_container: {
    height: 250,
    backgroundColor:'#f7f9f9',
    margin:10,
    borderRadius: 10,
    shadowColor: 'black',  
    elevation: 8,  
    flexDirection:"row",
    
    
  },
  
  content_container: {
    flexDirection:"column",
    margin:10,
    flex:1, 
    flexWrap: 'wrap',
    justifyContent:"center",
  },
  content_container2: {
   
    
    flex:1, 
   
 
  },

  image:{
    marginTop:15,
    marginBottom:15,
    height: 50,
    width: 50,

 },
 
})

