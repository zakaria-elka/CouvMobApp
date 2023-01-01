import React,{useState,useEffect}  from 'react';
import {StyleSheet,View, Text,Image, Button, Alert} from 'react-native';
import { FormItem,Form} from 'react-native-form-component';
import { useNavigation } from '@react-navigation/native';
import { launchCamera } from 'react-native-image-picker';

export const Verif=()=>{

  const [count,setCount]=useState(1);
  
   
    return(

        <View style={styles.cointainer}>
         <View style={styles.head}>
         
         </View>
         <Text style={styles.text}>{count}</Text>

         {count==1?<PhoneVerif setCount={setCount}/>:null}
         {count==2?<TakeProfilPic count={count} setCount={setCount}/>:null}
         {count>=3?<TakeProfilPic2 count={count} setCount={setCount}/>:null}
         
       
        



    

        </View>
        
        )
        




}




const TakeProfilPic=(props)=>{


let options={
  mediaType:'photo',
  includeBase64:true,
  cameraType:'front',

}  




const handlecame=async()=>{
  
  

  const res= await launchCamera(options)
  const bin = res.assets[0].base64;
 

await fetch('http://10.0.2.2:4500/api/account/mob/personalId/upload',
{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
    'personalid':bin,
    'userid':2
  })
      }).then(props.setCount(3))


 

}

return(

  <View   style={styles.button2}>
  <Image  style={{width:170,height:170}} 
  source={require('../../img/identity.png')}
/>
  <Button
   onPress={()=>handlecame()}
   title="Take picture"
   color="#841584"

   />
   </View>

)
}



const TakeProfilPic2=(props)=>{

  const num=props.count
  let options={
    mediaType:'photo',
    includeBase64:true,
    cameraType:'front',
  
  }  
  
  const [form,setform] = useState({
  
    userid:2,
    model:'',
    brand:'',
    num_ero:'',
    capacity:'',


 })
 
 const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
      };

  
 async function CarSubmit(){

  
  const res =await fetch('http://10.0.2.2:4500/api/account/add/car', requestOptions)
  if(res.status==200){
    props.setCount(4)}


   
   
}
  
  const handlecame=async()=>{
    
    
  
    const res= await launchCamera(options)
    const bin = res.assets[0].base64;
   
  
  await fetch('http://10.0.2.2:4500/api/account/mob/carregistration/upload',
  {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
      'personalid':bin,
      'userid':2
    })
        }).then(()=>navigation.navigate('HomeScreen'))
  
  
   
  
  }
  
  return(
<View >
{num==3?<Form  style={{width:"90%",marginLeft:20,marginTop:50}} onButtonPress={() =>CarSubmit()}>
    <FormItem  placeholder='Entrer Brand'
         label="Car Brand"
         isRequired
         asterik
         value={form.brand}
         onChangeText={(value) =>{setform({...form, brand:value})}}
    />
    <FormItem  placeholder='Enter Model'
         label="Model"
         isRequired
         asterik
         value={form.model}
         onChangeText={(value) =>{setform({...form, model:value})}}
    /><FormItem placeholder='CarNumber/رقم السيارة'
         label="Car Plate Number"
         isRequired
         asterik
         value={form.num_ero}
         onChangeText={(value) =>{setform({...form, num_ero:value})}}
    />
    <FormItem  placeholder='Enter capacity'
         label="Car capacity"
         isRequired
         asterik
         value={form.capacity}
         onChangeText={(value) =>{setform({...form, capacity:value})}}
    />
  </Form>:null }
{num>3?  
  <View   style={styles.button2}>
    <Image  style={{width:170,height:170}} 
    source={require('../../img/carownership.png')}
  />
    <Button
     onPress={()=>handlecame()}
     title="Take picture"
     color="#841584"
  
     />
     </View>:null}

</View>
  )
  }


const PhoneVerif=(props)=>{
  


const [code,setCode]=useState(Math.floor(1000 + Math.random() * 9000));
const [val,setVal]=useState('');

useEffect(() => {
  Alert.alert("Verif","We sent you a code to verif your phone")
  console.log(code);
}, []);

const handleCode=()=>{


if(val==code){
  Alert.alert("Verified")
  props.setCount(2)
}



}



return(


<View style={styles.phoneView}>

<Image  style={styles.image} 
  source={require('../../img/phone.png')}
/>
<FormItem  style={{width:'50%',marginTop:30}} 
         onChangeText={(value) =>{setVal(value)}}
         placeholder='Entrer Code Verif'         
         

       
       
    />
<Button title='verif' onPress={()=>{handleCode()}}/>    
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

    },
    button2:{

      marginTop:'40%',
      alignItems:"center",
      justifyContent:"center",
      
      
      },
      
   
})