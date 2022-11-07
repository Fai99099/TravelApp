import { StyleSheet, Text, View,Platform,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import ScreenWrapper from '../components/screen-wrapper'
import BackIcon from 'react-native-vector-icons/Ionicons';
import DropdownComponent from '../components/Dropdown-Component';
import AddButton from '../components/add-butt';
const AddTrip = ({ navigation }) => {
 const [place,setPlace]=useState('');
 const [country,setCountry]=useState('');
  return (
    <ScreenWrapper>
    <View style={styles.addTripWrapper}>
    <View style={{
      backgroundColor: "rgba(120, 181, 204, 0.9)",
      height:270,
      borderBottomLeftRadius:40,
      borderBottomRightRadius:40,
      paddingHorizontal:10,
      
    }}>
    <BackIcon onPress={() => navigation.navigate("Home")} style={styles.icon} name="arrow-back" size={40}/>
      </View>
    <View>
      <DropdownComponent />
      </View>
      <View>
    </View>
    <AddButton buttonText={'Add Trip'} onPress={()=>navigation.navigate('Home')}/>
    </View>
    </ScreenWrapper>
  )
}

export default AddTrip

const styles = StyleSheet.create({
icon:{
paddingTop:Platform.OS ==="ios"?50:10,
color:'white',
},

addTripWrapper:{
  justifyContent:'space-between',
  height:"100%",
},
})