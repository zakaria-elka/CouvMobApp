import React,{useState}  from 'react';
import {StyleSheet,View, Text,Image, Button} from 'react-native';
import { FormItem } from 'react-native-form-component';
import { useNavigation } from '@react-navigation/native';


export const Verif=()=>{

    const [count,setCount]=useState(1);

    return(

        <View style={styles.cointainer}>
         <View style={styles.head}>
         
         </View>
         <Text style={styles.text}>{count}</Text>
         {count==1?
         <PhoneVerif/>:null}
         <View   style={styles.button}>
        <Button
         onPress={()=>setCount(count+1)}
         title="Next"
         color="#841584"

         />
        </View>
  
        </View>
        
        )
        




}

const PhoneVerif=()=>{

return(

<View style={styles.phoneView}>

<Image  style={styles.image} 
  source={require('../../img/phone.png')}
/>
<FormItem style={{width:'50%',marginTop:30}} 
 
         placeholder='Entrer Code Verif'         
         isRequired

       
       
    />
</View>


)


}


const styles = StyleSheet.create({
    container: {
  
      flex: 1,
   
  
    },
    head:{

         backgroundColor:'#712FFF',
         width:'100%',
         height:120,


    },
    text:{
     color:'white',
     position:'absolute',
     zIndex:2,
     fontSize:90,
     marginTop:50,
     width:100,
     alignSelf:'center',
     textAlign:'center',
     borderRadius:400/2,
     borderWidth:4,
     borderColor:'white',
     backgroundColor:'#712FFF',
     
     


    },
    button:{

      marginTop:'20%',
      alignItems:"center",
      justifyContent:"center",
      
      
      },
      image:{

      height:150,
      width:150,
      
      },
    phoneView:{

      marginTop:'30%',
      alignItems:"center",
      justifyContent:"center",

    }
      
   
})