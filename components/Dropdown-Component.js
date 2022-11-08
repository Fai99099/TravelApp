import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import { useDispatch } from 'react-redux';
import {addTrip} from '../redux/slice/trips';
import AddButton from '../components/add-butt';


const DropdownComponent = ({navigation}) => {
  
  return (
    <View style={styles.addTripWrapper}>
      
      <View style={{marginVertical:230,}}>
     
   </View>
      </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  addTripWrapper:{
    //justifyContent:'space-between',
    height:"100%",
  },
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
});
