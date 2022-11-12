import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/screen-wrapper";
import BackIcon from "react-native-vector-icons/Ionicons";
import AddButton from "../components/add-butt";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/slice/trips";

const AddExpenses = ({ navigation, route }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  //const [errorMes, setEroorMes] =useState("");
  // const [categoryName, setCategoryName] = useState("");
  // const [amountNumber, setAmountNumber] = useState(0);
  const selectedTrip = route.params;

  const dispatch = useDispatch();

  const handeleExpeneseAdded = () => {
    if (amount !== "" && category !== "") {
      const expense = {
        id: Date.now(),
        category,
        amount,
      };
      const data = {
        tripId: selectedTrip.id,
        expense,
      };

      dispatch(addExpense(data));
      navigation.navigate("Trip Expenses", selectedTrip);
    } else if (amount === "" || category === "") {
      Alert.alert("Can't be Added, please fill all");
    }
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
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "#05A4C8",
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
                <View key={catg}>
                  <TouchableOpacity
                    style={{
                      ...styles.category,
                      backgroundColor: category === catg ? "#00E194" : "white",
                    }}
                    onPress={() => setCategory(catg)}
                  >
                    <Text
                      style={{
                        ...styles.categoryLabel,
                        color: category == catg ? "white" : "black",
                      }}
                    >
                      {catg}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.formItem}>
            <Text style={styles.labelPrice}>How Much?</Text>
            <TextInput
              value={amount}
              //secureTextEntry={true}
              //keyboardType="number-pad"
              onChangeText={(text) => setAmount(text.replace(/[^0-9]/g, ""))}
              //onChangeText={(text) => setAmount(text)}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.btn}>
          <AddButton onPress={handeleExpeneseAdded} />
        </View>
      </View>
    </ScreenWrapper>
  );
};
//(e) => setAmount(Number(e))
export default AddExpenses;

const styles = StyleSheet.create({
  icon: {
    paddingTop: Platform.OS === "ios" ? 50 : 10,
    color: "white",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#05A4C8",
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
  category: {
    paddingVertical: 12,
    paddingHorizontal: 34,
    marginRight: 6,
    marginBottom: 16,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  categoryOptions: {
    display: "flex",
    flexDirection: "row",
    marginTop: 12,
    flexWrap: "wrap",
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: "600",
  },
  form: {
    justifyContent: "space-between",
    margin: 30,
    height: "45%",
    marginBottom: 20,
  },
  formItem: {
    marginVertical: -14,
    paddingBottom: 50,
  },
  label: {
    paddingTop: 28,
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    paddingHorizontal: 17,
  },
  // btn: {
  //   borderColor: "red",
  //   borderWidth: 1,

  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 0,
  // },
  labelPrice: {
    // paddingBottom:18,

    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    paddingHorizontal: 17,
  },
  input: {
    backgroundColor: "white",
    marginTop: 12,
    fontSize: 16,
    padding: 12,
    borderRadius: 18,
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
