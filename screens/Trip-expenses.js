import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import BackIcon from "react-native-vector-icons/Ionicons";
import ScreenWrapper from "../components/screen-wrapper";
import ExpenseCard from "../components/Trips/expense-card";
//import {amount} from "../components/Trips/expense-card";
import EmptyExpense from "../components/Trips/empty-expense";
import { useSelector } from "react-redux";
//import trips from "../redux/slice/trips";

const TripExpenses = ({ navigation, route }) => {
   const selectedTrip = route.params;
  console.log("selectedTrip",selectedTrip)
  
  const allTrips=useSelector(state =>state.trips.trips);

  const expenses = allTrips.find(trip => trip.id === selectedTrip.id).expenses;
  console.log("expencee",expenses)

  return (
    <ScreenWrapper>
      <View>
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
            onPress={() => navigation.navigate("Home")}
            style={styles.icon}
            name="arrow-back"
            size={40}
          />
          <View style={styles.cityContiner}>
            <Text style={styles.city}>{selectedTrip.city}</Text>
          </View>
        </View>
        <View style={styles.txtBtn}>
          <Text style={styles.subHeading}>Expense</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Add Expense", selectedTrip)}
          >
            <Text style={styles.btnText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatlistcontainer}>
          <View style={styles.listWrapper}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={expenses}
              renderItem={({ item }) =>
               <ExpenseCard expense={item} tripId={selectedTrip.id} />  
             }
            //  extraData={isRender}
              keyExtractor={item => item.id}
              ListEmptyComponent={<EmptyExpense />}
            />
           {/*<Text>total: {amount+1}</Text>*/}
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default TripExpenses;

const styles = StyleSheet.create({
  icon: {
    paddingTop: Platform.OS === "ios" ? 50 : 10,
    color: "white",
  },
  city: {
    textAlign: "center",
    color: "rgba(120, 181, 204, 0.9)",
    fontSize: 20,
    fontWeight: "700",
  },
  cityContiner: {
    fontSize: 18,
    top: 250,
    position: "absolute",
    paddingVertical: 12,
    width: "50%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginLeft: 100,
  },
  btnText: {
    color: " rgba(120, 181, 204, 0.9)",
    fontWeight: "700",
  },
  txtBtn: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 24,
    padding: 20,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: "gray",
    //padding:20,
  },
  listWrapper: {
    marginBottom: 120,
    height: 460,
    paddingTop: 0,
    padding: 0,
  },
});
