import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import ScreenWrapper from "../components/screen-wrapper";
const Home = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <View>
          <View style={styles.bannerContiner}>
          <Image
            source={require('../assets/image/image.jpg')}
            style={styles.banner}
          />
          </View>
          <View style={styles.homeHeader}>
          <Text style={styles.heading}>Tripify</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Add Trip')}>
      <View style={styles.addTripButt}>
      <Text style={styles.addButtText}>Add Trip</Text>
      </View>
      </TouchableOpacity>
      </View>
      <Text style={styles.subHeading}>RECENT TRIPS</Text>
    <View>
    <FlatList/>
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
  banner:{
    width: "150%",
    height: 250,
    resizeMode:'contain',
 position:'relative',
    borderBottomRightRadius:300,
  },
  bannerContiner:{
display:'flex',
justifyContent:'center',
alignItems:'center',
  },
  homeHeader:{
    paddingTop:100,
    paddingLeft:16,
    position:'absolute',
},
  addButtText:{
      fontSize:17,
      fontWeight:'600',
      color:'white',
  },
  addTripButt:{
    position:'absolute',
    backgroundColor:"#a3b0b5",
    paddingVertical:9,
    paddingHorizontal:18,
    borderRadius:18,
    left:280,
  },
  subHeading:{
    fontSize:18,
    fontWeight:'500',
    color:'black',
    top:50,
  }
});
