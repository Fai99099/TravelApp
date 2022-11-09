import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
} from "react-native";
import React from "react";
import ScreenWrapper from "../components/screen-wrapper";
import EmptyList from "../components/home/empty-list";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const tripList = useSelector(state=>state.trips.trips);
  return (
    <ScreenWrapper>
      <View>
        <View style={styles.bannerContiner}>
          <Image
            source={require("../assets/image/image.jpg")}
            style={styles.banner}
          />
        </View>
        <View style={styles.homeHeader}>
          <Text style={styles.heading}>Tripify</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Add Trip")}>
          <View style={styles.addTripButt}>
            <Text style={styles.addButtText}>Add Trip</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.subHeading}>RECENT TRIPS</Text>
      <View style={styles.listWrapper}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={tripList}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.tripList}
          ListEmptyComponent={<EmptyList />}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>navigation.navigate("Trip Expenses",item)}>
              <View style={styles.tripCard}>
                <Image source={item.banner} style={styles.tripBanner} />
                <Text style={styles.city}>{item.city}</Text>
                <Text style={styles.country}>{item.country}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  banner: {
    width: Platform.OS === "ios" ? "100%" : "100%",
    height: Platform.OS === "ios" ? 270 : 250,
    //resizeMode: "contain",
    position: "relative",
    borderBottomRightRadius: 100,
  },
  bannerContiner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  homeHeader: {
    paddingTop: 120,
    paddingLeft: 30,
    position: "absolute",
  },
  addButtText: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
  },
  addTripButt: {
    position: "absolute",
    backgroundColor: "rgba(120, 181, 204, 0.9)",
    margin: 3,
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 18,
    left: Platform.OS === "ios" ? 300 : 250,
  },
  subHeading: {
    top: 50,
    margin: 15,
    fontSize: 18,
      fontWeight:"700",
      color:"gray",
  },
  tripBanner: {
    height: 180,
    width: 175,
    //resizeMode: "striped",
    borderRadius:20,
   
  },
  city: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 17,
  },
  country: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 12,
  },
  listWrapper: {
    marginBottom: 120,
    height: 620,
    paddingTop: 50,
    padding: 20,
  },
  tripCard: {
//     borderColor:"black",
// shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.9,
//     shadowRadius: 2,
//     backgroundColor:"white",
//     elevation: 2,
    backgroundColor: "rgba(120, 181, 204, 0.2)",
    marginBottom: 12,
    padding: 0,
    borderRadius: 18,
    
  },
  tripList: {
    justifyContent: "space-between",
  },
});
