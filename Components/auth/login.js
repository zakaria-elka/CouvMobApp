import React,{useState}  from 'react';
import {StyleSheet,View, Text,Image} from 'react-native';
import { Logo } from '../logo';
import { Menu } from '../Menu/Menu';
import { Form, FormItem } from 'react-native-form-component';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Login = () =>{

 const navigation = useNavigation();   
 const [form,setform] = useState({
  
    email:'',
    password:''


 })
 
 const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
      };

 const logSubmit= async()=>{

  try{

  await fetch('http://10.0.2.2:4500/api/auth/user/login', requestOptions)
  .then(res=>res.json())
  .then(data=>console.log(data))
  .then(data=>AsyncStorage.setItem('UserData',data));
  

 }catch(err){
  alert(err)

 }

 }



return(

<View style={styles.cointainer}>

<Logo/>

<View style={styles.formView}>
<Form onButtonPress={() => logSubmit()}>
    <FormItem  placeholder='Entrer Email'
         label="Email"
         isRequired
         asterik
         value={form.email}
         onChangeText={(value) =>{setform({...form, email:value})}}
    />
    <FormItem  placeholder='Enter Password'
         label="Password"
         isRequired
         secureTextEntry={true}
         asterik
         value={form.password}
         onChangeText={(value) =>{setform({...form, password:value})}}
    />
  </Form>
<Text style={{marginLeft:'30%',fontWeight:'600'}}>Not Have An Account!{"\n\t\t\t"}
<Text onPress={()=>navigation.navigate("RegisterScreen")} style={{color:'blue'}}>Register Here</Text>
</Text>
</View>
<Menu/>
</View>

)

}


const styles = StyleSheet.create({
    container: {
  
      flex: 1,
   
  
    },
    formView:{

        width:'90%',
        margin:'5%',
        marginTop:'15%',
        height:'100%'
        



    }

})