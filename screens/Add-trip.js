import { StyleSheet, Text, View,Platform,FlatList, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import ScreenWrapper from '../components/screen-wrapper'
import BackIcon from 'react-native-vector-icons/Ionicons';
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import AddButton from '../components/add-butt';
import { useDispatch } from 'react-redux';
import {Random_Thumbnail} from '../assets/assets';
import {addTrip} from '../redux/slice/trips';
const AddTrip = ({ navigation }) => {
  const [placeBaneer,setPlaceBanner]=useState();
  const [isFocus,setIsFocus]=useState(false)
  const [countryData, setCountryData]=useState([]);
  const [country,setCountry]=useState("");
  const [cityData,setCityData]=useState([]);
  const [city,setCity]=useState("");
  const [countryName,setCountryName]=useState(null);
  const [cityName,setCityName]=useState(null);

  useEffect(()=>{
setPlaceBanner(Random_Thumbnail());

  },[]);

  useEffect(()=>{
    var config = {
      method: 'get',
      url: 'https://api.countrystatecity.in/v1/countries',
      headers: {
        'X-CSCAPI-KEY': 'T2FadXRsaFoxVklYdm5BdXBVZ05CcmdqcDVBYjVxV3djT3o2ejVWag=='
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      var count=Object.keys(response.data).length;
      let CountryArray=[];
      for (var i=0; i<count;i++){
        CountryArray.push({
          value: response.data[i].iso2,
          label: response.data[i].name,
        });
      }
      setCountryData(CountryArray);
    })
    .catch(function (error) {
      console.log(error);
    });

  },[]);
  
const handelCity=(countryCode)=>{

var config = {
  method: 'get',
  url: `https://api.countrystatecity.in/v1/countries/${countryCode}/cities`,
  headers: {
    'X-CSCAPI-KEY': 'T2FadXRsaFoxVklYdm5BdXBVZ05CcmdqcDVBYjVxV3djT3o2ejVWag=='
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  var count=Object.keys(response.data).length;
      let CityArray=[];
      for (var i=0; i<count;i++){
        CityArray.push({
          value: response.data[i].id,
          label: response.data[i].name,
        });
      }
      setCityData(CityArray);
})
.catch(function (error) {
  console.log(error);
});
}

const dispatch=useDispatch();

 const handelAddTrip=()=>{
   if(country !== "" && city !== ""){
  const tripData={
    id: Date.now(),
    country:countryName,
    city:cityName,
    banner:placeBaneer,
    expenses:[],
  }
   dispatch(addTrip(tripData));
   navigation.navigate('Home');
    }
    else if(country==="" || city===""){
      Alert.alert("pls fill all");
    }  
}



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
    <View style={styles.formItem}>
    <Text style={styles.subHeading}>Which Country ?</Text>
  </View>
  <Dropdown
    style={[styles.dropdown,isFocus&&{borderColor:'blue'}]}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    inputSearchStyle={styles.inputSearchStyle}
    data={countryData}
    search
    maxHeight={300}
    labelField="label"
    valueField="value"
    placeholder={!isFocus?"Select Country":"..."}
    searchPlaceholder="Search..."
    value={country}
    onFocus={()=>setIsFocus(true)}
    onBlur={()=>setIsFocus(false)}
    onChange={(item) => {
      setCountry(item.value);
      handelCity(item.value);
      setCountryName(item.label);
      setIsFocus(false);
    }}
  />
  <View style={styles.formItem}>
    <Text style={styles.subHeading}>Which City ?</Text>
  </View>
  <Dropdown
    style={[styles.dropdown,isFocus&&{borderColor:'blue'}]}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    inputSearchStyle={styles.inputSearchStyle}
    data={cityData}
    search
    maxHeight={300}
    labelField="label"
    valueField="value"
    placeholder={!isFocus?"Select City":"..."}
    searchPlaceholder="Search..."
    value={city}
    onFocus={()=>setIsFocus(true)}
    onBlur={()=>setIsFocus(false)}
    onChange={(item) => {
      setCity(item.value);
      setCityName(item.label);
      setIsFocus(false);
    }}
  />
      </View>

      <View style={{marginVertical:Platform.OS ==="ios"?230:80,}}>
      <AddButton buttonText={'Add Trip'} onPress={handelAddTrip}/>
      </View>
     
    </View>
    </ScreenWrapper>
  )
}

export default AddTrip

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  subHeading: {
    paddingTop: 28,
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    paddingHorizontal: 17,
  },
  formItem: {
   // marginVertical:15,
  },
icon:{
paddingTop:Platform.OS ==="ios"?50:10,
color:'white',
},

addTripWrapper:{
 // justifyContent:'space-between',
  height:"100%",
},
})