import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";


const DropdownComponent = () => {
  const[isFocus,setIsFocus]=useState(false)
  const [Data, setData] = useState([]);
  const [countryData, setCountryData]=useState([]);
  const [country,setCountry]=useState(null);
  const [cityData,setCityData]=useState([]);
  const [city,setCity]=useState(null);
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
  return (
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
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

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
    //marginVertical:19,
  },
});
