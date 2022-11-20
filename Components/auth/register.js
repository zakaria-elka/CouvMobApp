import React,{useState}  from 'react';
import {StyleSheet,View, Text,Image} from 'react-native';

import { Menu } from '../Menu/Menu';
import { Form, FormItem } from 'react-native-form-component';
import { useNavigation } from '@react-navigation/native';


export const Register = () =>{

 const navigation = useNavigation();   
 const [regform,setRegform] = useState({
  
    Fname:'',
    Lname:'',
    phone:'',
    CNi:'',
    email:'',
    password:''


 })

return(

<View style={styles.cointainer}>



<View style={styles.formView}>
<Form onButtonPress={() => console.log(regform)}>
   <FormItem  placeholder='Entrer First Name'
         label="First Name"
         isRequired
         asterik
         value={regform.Fname}
         onChangeText={(value) =>{setRegform({...regform, Fname:value})}}
    />
   <FormItem  placeholder='Entrer Last Name'
         label="Last Name"
         isRequired
         asterik
         value={regform.Lname}
         onChangeText={(value) =>{setRegform({...regform, Lname:value})}}
    />
   
    <FormItem  placeholder='Entrer Phone Number'
         label="Phone Number"
         isRequired
         asterik
         value={regform.phone}
         onChangeText={(value) =>{setRegform({...regform, phone:value})}}
    />
    <FormItem  placeholder='Entrer CNI Number'
         label="CNI Number"
         isRequired
         asterik
         value={regform.Lname}
         onChangeText={(value) =>{setRegform({...regform, Lname:value})}}
    />
    <FormItem  placeholder='Entrer Email'
         label="Email"
         isRequired
         asterik
         value={regform.email}
         onChangeText={(value) =>{setRegform({...regform, email:value})}}
    />
    <FormItem  placeholder='Enter Password'
         label="Password"
         isRequired
         secureTextEntry={true}
         asterik
         value={regform.password}
         onChangeText={(value) =>{setRegform({...regform, password:value})}}
    />
  </Form>

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