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
import { Random_Thumbnail, Thumbnails } from "../assets/assets";
import EmptyList from "../components/home/empty-list";
const Mockdata = [
  {
    id: 1,
    banner: Random_Thumbnail(),
    place: "RYD",
    country: "Saudi",
  },
  {
    id: 2,
    banner: Random_Thumbnail(),
    place: "RYD",
    country: "Saudi",
  },
];
const Home = ({ navigation }) => {
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
          data={Mockdata}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.tripList}
          ListEmptyComponent={<EmptyList />}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>navigation.navigate("Trip Expenses",item)}>
              <View style={styles.tripCard}>
                <Image source={item.banner} style={styles.tripBanner} />
                <Text style={styles.place}>{item.place}</Text>
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
    backgroundColor: "#a3b0b5",
    margin: 3,
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 18,
    left: Platform.OS === "ios" ? 300 : 250,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    top: 50,
    margin: 15,
  },
  tripBanner: {
    height: 150,
    width: 160,
    resizeMode: "contain",
  },
  place: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 6,
  },
  country: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 6,
  },
  listWrapper: {
    marginBottom: 120,
    height: 420,
    paddingTop: 70,
    padding: 19,
  },
  tripCard: {
    backgroundColor: "#a3b0b5",
    marginBottom: 12,
    padding: 8,
    borderRadius: 18,
  },
  tripList: {
    justifyContent: "space-between",
  },
});
