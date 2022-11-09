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
import {amount} from "../components/Trips/expense-card";
import EmptyExpense from "../components/Trips/empty-expense";
import { useSelector } from "react-redux";
//import trips from "../redux/slice/trips";

const TripExpenses = ({ navigation, route }) => {
   const selectedTrip = route.params;

  // const expenses = useSelector(state => {
  //   const trips = state.trips.trips;
  //   const expensesToBeShown = trips.filter(
  //     trip => trip.id === selectedTrip.id

  //   );
  //   if (expensesToBeShown.length > 0) {
  //     return expensesToBeShown[0].expenses;
  //   }
  //    return [];

  // });
  
  const allTrips=useSelector(state =>state.trips);
  const expenses=selectedTrip.expenses;
  console.log("selectedTrip",selectedTrip);
  console.log("allExpenses",expenses);

const Mockdata=[
  // {
  //   id:1,
  //   title:"bought apple",
  //   category:"Food",
  //   amount:200,
  // },
  // {
  //   id:2,
  //   title:"skyday",
  //   category:"Entertainment",
  //   amount:200,
  // },
  // {
  //   id:3,
  //   title:"bought apple",
  //   category:"Shopping",
  //   amount:200,
  // },
 ];
// const [expenseData, setdata] = useState(Mockdata);
// const[isRender,setisRender]=useState(false);
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
               <ExpenseCard expense={item} />  
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
