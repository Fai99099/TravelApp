import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/screen-wrapper";
import BackIcon from "react-native-vector-icons/Ionicons";
import AddButton from "../components/add-butt";
const AddExpenses = ({ navigation, route }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const selectedTrip = route.params;
  const handeleExpeneseAdded = () => {
    navigation.navigate("Trip Expenses", selectedTrip);
  };

  const Category = [
    "Food",
    "Shopping",
    "Tickets",
    "Entertainment",
    "Transportation",
    "Residence",
    "Gifts",
    "Other",
  ];
  return (
    <ScreenWrapper>
      <View
        style={{
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(120, 181, 204, 0.9)",
            height: 270,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            paddingHorizontal: 10,
          }}
        >
          <BackIcon
            onPress={() => navigation.navigate("Trip Expenses", selectedTrip)}
            style={styles.icon}
            name="arrow-back"
            size={40}
          />
        </View>

        <View style={styles.subHeadingContainar}>
          <Text style={styles.subHeading}>Add New Expense</Text>
        </View>
        <View style={styles.form}>
        <View style={styles.formItem}>
          <Text style={styles.label}>Category</Text>
          <View style={styles.categoryOptions}>
            {Category.map((catg) => (
              <TouchableOpacity style={{...styles.category,backgroundColor:category===catg?"rgba(120, 181, 204, 0.9)" :"white",}} 
              onPress={() => setCategory(catg)}
              >
                <Text style={{
                  ...styles.categoryLabel,
                  color:category==catg?"white":"black",}}>{catg}</Text>
              </TouchableOpacity>
            ))}
            </View>
          </View>
          <View style={styles.formItem}>
            <Text style={styles.labelPrice}>How Much?</Text>
            <TextInput
              value={amount}
              onChangeText={e => setAmount(Number(e))}
              style={styles.input}
            />
          </View>
        </View>
        <AddButton onPress={handeleExpeneseAdded} />
      </View>
    </ScreenWrapper>
  );
};

export default AddExpenses;

const styles = StyleSheet.create({
  icon: {
    paddingTop: Platform.OS === "ios" ? 50 : 10,
    color: "white",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: "rgba(120, 181, 204, 0.9)",
    textAlign: "center",
  },
  subHeadingContainar: {
    fontSize: 18,
    top: 250,
    position: "absolute",
    paddingVertical: 12,
    width: "50%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginLeft: 100,
  },
  category:{
    paddingVertical: 12,
    paddingHorizontal:34,
marginRight:6,
marginBottom:16,
borderRadius:18,
  },
  categoryOptions:{
    display: "flex",
    flexDirection:"row",
    marginTop:12,
    flexWrap: "wrap",
  },
  categoryLabel:{
    fontSize:12,
    fontWeight:"600",
  },
  form:{
   //marginVertical:34,
   margin:25,
   //marginVertical:30,

  },
  formItem:{
    marginVertical:-10, 
    paddingBottom:50,
    
  },
  label:{
    paddingTop: 28,
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    paddingHorizontal: 17,
  },
  labelPrice:{
   // paddingBottom:18,
  
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    paddingHorizontal: 17,
  },
});
