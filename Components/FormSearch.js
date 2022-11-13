import React , {useRef,useState} from 'react';
import {StyleSheet,View, Button,Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker'


export function FormSearch() {

  const [da_te, setDate] = useState(new Date())
  const [formData,setFormData]=useState({
    date:new Date(),
    city:'',
    dest:''
  })

  const handleFormData = () =>{

    
    console.log(formData)



  }
    
  return (

  <View style={styles.container}>
  <Text style={{textAlign:'center',fontWeight: 'bold',fontSize: 18,}}>Select a City</Text>
  <View style={styles.container2}>
      <RNPickerSelect
            onValueChange={value =>{setFormData({...formData, city:value})}}
            fixAndroidTouchableBug={true}
            placeholder={{
                    label: 'Select a city...',
                    
                }}
            items={[
                { label: 'Agadir', value: 'Agadir' },
                { label: 'Al Hoceima', value: 'Al Hoceima' },
                { label: 'Azilal', value: 'Azilal' },
                { label: 'Beni Mellal', value: 'Beni Mellal' },
                { label: 'Ben Slimane', value: 'Ben Slimane' },
                { label: 'Boulemane', value: 'Boulemane' },
                { label: 'Casablanca', value: 'Casablanca' },
                { label: 'Chaouen', value: 'Chaouen' },
                { label: 'El Jadida', value: 'El Jadida' },
                { label: 'El Kelaa des Sraghna', value: 'El Kelaa des Sraghna' },
                { label: 'Er Rachidia', value: 'Er Rachidia' },
                { label: 'Essaouira', value: 'Essaouira' },
                { label: 'Fes', value: 'Fes' },
                { label: 'Figuig', value: 'Figuig' },
                { label: 'Guelmim', value: 'Guelmim' },
                { label: 'Ifrane', value: 'Ifrane' },
                { label: 'Kenitra', value: 'Kenitra' },
                { label: 'Khemisset', value: 'Khemisset' },
                { label: 'Khenifra', value: 'Khenifra' },
                { label: 'Khouribga', value: 'Khouribga' },
                { label: 'Laayoune', value: 'Laayoune' },
                { label: 'Larache', value: 'Larache' },
                { label: 'Marrakech', value: 'Marrakech' },
                { label: 'Meknes', value: 'Meknes' },
                { label: 'Nador', value: 'Nador' },
                { label: 'Ouarzazate', value: 'Ouarzazate' },
                { label: 'Oujda', value: 'Oujda' },
                { label: 'Rabat-Sale', value: 'Rabat-Sale' },
                { label: 'Safi', value: 'Safi' },
                { label: 'Settat', value: 'Settat' },
                { label: 'Sidi Kacem', value: 'Sidi Kacem' },
                { label: 'Tangier', value: 'Tangier' },
                { label: 'Tan-Tan', value: 'Tan-Tan' },
                { label: 'Taounate', value: 'Taounate' },
                { label: 'Taroudannt', value: 'Taroudannt' },
                { label: 'Tata', value: 'Tata' },
                { label: 'Taza', value: 'Taza' },
                { label: 'Tetouan', value: 'Tetouan' },
                { label: 'Tiznit', value: 'Tiznit' },
               
                
            ]}
        />
 
  </View>
  <Text style={{textAlign:'center',fontWeight: 'bold',fontSize: 18,}}>Select Destination</Text>
  <View style={styles.container2}>
      <RNPickerSelect
            onValueChange={value =>{setFormData({...formData, dest:value})}}
            fixAndroidTouchableBug={true}
            placeholder={{
                    label: 'Select Destination...',
                    
                }}
            items={[
                { label: 'Agadir', value: 'Agadir' },
                { label: 'Al Hoceima', value: 'Al Hoceima' },
                { label: 'Azilal', value: 'Azilal' },
                { label: 'Beni Mellal', value: 'Beni Mellal' },
                { label: 'Ben Slimane', value: 'Ben Slimane' },
                { label: 'Boulemane', value: 'Boulemane' },
                { label: 'Casablanca', value: 'Casablanca' },
                { label: 'Chaouen', value: 'Chaouen' },
                { label: 'El Jadida', value: 'El Jadida' },
                { label: 'El Kelaa des Sraghna', value: 'El Kelaa des Sraghna' },
                { label: 'Er Rachidia', value: 'Er Rachidia' },
                { label: 'Essaouira', value: 'Essaouira' },
                { label: 'Fes', value: 'Fes' },
                { label: 'Figuig', value: 'Figuig' },
                { label: 'Guelmim', value: 'Guelmim' },
                { label: 'Ifrane', value: 'Ifrane' },
                { label: 'Kenitra', value: 'Kenitra' },
                { label: 'Khemisset', value: 'Khemisset' },
                { label: 'Khenifra', value: 'Khenifra' },
                { label: 'Khouribga', value: 'Khouribga' },
                { label: 'Laayoune', value: 'Laayoune' },
                { label: 'Larache', value: 'Larache' },
                { label: 'Marrakech', value: 'Marrakech' },
                { label: 'Meknes', value: 'Meknes' },
                { label: 'Nador', value: 'Nador' },
                { label: 'Ouarzazate', value: 'Ouarzazate' },
                { label: 'Oujda', value: 'Oujda' },
                { label: 'Rabat-Sale', value: 'Rabat-Sale' },
                { label: 'Safi', value: 'Safi' },
                { label: 'Settat', value: 'Settat' },
                { label: 'Sidi Kacem', value: 'Sidi Kacem' },
                { label: 'Tangier', value: 'Tangier' },
                { label: 'Tan-Tan', value: 'Tan-Tan' },
                { label: 'Taounate', value: 'Taounate' },
                { label: 'Taroudannt', value: 'Taroudannt' },
                { label: 'Tata', value: 'Tata' },
                { label: 'Taza', value: 'Taza' },
                { label: 'Tetouan', value: 'Tetouan' },
                { label: 'Tiznit', value: 'Tiznit' },
               
                
            ]}
        />
 
  </View>
  <Text style={{textAlign:'center',fontWeight: 'bold',fontSize: 18,}}>Select Date</Text>
  <View style={styles.container3}>
  <DatePicker style={styles.date} date={da_te} onDateChange={(date) =>{setFormData({...formData,
   date:date
  })}} 
  mode="date" />

  </View>
  <View   style={styles.button}>
  <Button
  onPress={()=>handleFormData()}

  title='Search'
  color="#841584"

  />
  </View>
  </View>
  );
}


const styles = StyleSheet.create({
container2:{


  

  marginLeft:5,
  marginRight:5,
  borderWidth: 2,
  borderColor: 'black',
  borderRadius: 8,
  color: 'black',

 

},
container:{


  
  marginTop:50,

 

},
container3:{


  
  alignItems:'center',
  justifyContent:'center',
  marginLeft:35,
  marginRight:35,
  borderWidth: 2,
  borderColor: 'black',
  borderRadius: 8,
  color: 'black',

 

},
date:{

  

  height:100,


},
button:{

marginTop:30,
alignItems:"center",
justifyContent:"center",


}




}
)

