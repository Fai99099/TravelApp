import { StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native'
import React from 'react'
import BackIcon from 'react-native-vector-icons/Ionicons';
import ScreenWrapper from '../components/screen-wrapper'
import ExpenseCard from '../components/Trips/expense-card';
import EmptyExpense from '../components/Trips/empty-expense';
const Mockdata=[
  {
    id:1,
    title:"bought apple",
    category:"Food",
    amount:200,
  },
  {
    id:2,
    title:"skyday",
    category:"Entertainment",
    amount:200,
  },
  {
    id:3,
    title:"bought apple",
    category:"Shopping",
    amount:200,
  },
  {
    id:4,
    title:"bought apple",
    category:"Transportation",
    amount:200,
  },
  {
    id:5,
    title:"hotel",
    category:"Residence",
    amount:100,
  },
  {
    id:6,
    title:"bought apple",
    category:"Tickets",
    amount:200,
  },
  {
    id:7,
    title:"bought apple",
    category:"Gifts",
    amount:50,
  },
  {
    id:8,
    title:"bought apple",
    category:"Other",
    amount:200,
  },
]

const TripExpenses = ({ navigation,route }) => {
  const selectedTrip=route.params;
  return (
    <ScreenWrapper>
    <View>
    <View style={{
      backgroundColor: "rgba(120, 181, 204, 0.9)",
      height:270,
      borderBottomLeftRadius:40,
      borderBottomRightRadius:40,
      paddingHorizontal:10,
    }}>
    <BackIcon onPress={() => navigation.navigate("Home")} style={styles.icon} name="arrow-back" size={40} />
      <View style={styles.placeContiner}>
      <Text style={styles.place}>{selectedTrip.place}</Text>
      </View>
    </View>
    <View style={styles.txtBtn}>
    <Text style={styles.subHeading}>Expense</Text>
    <TouchableOpacity
    onPress={()=>navigation.navigate('Add Expense',selectedTrip)}>
    <Text style={styles.btnText}>Add Expense</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.flatlistcontainer}>
    <View style={styles.listWrapper}>
    <FlatList
    showsVerticalScrollIndicator={false}
      data={Mockdata}
      renderItem={({item})=>
      <ExpenseCard expense={item}/>}
      keyExtractor={item=>item.id}
      ListEmptyComponent={<EmptyExpense/>}/>
      </View>
      </View>
    </View>
    </ScreenWrapper>
  )
}

export default TripExpenses

const styles = StyleSheet.create({
  icon:{
    paddingTop:Platform.OS ==="ios"?50:10,
    color:'white',
    },
    place:{
      textAlign:'center',
      color:'rgba(120, 181, 204, 0.9)',
      fontSize:20,
      fontWeight:"700",
    },
    placeContiner:{
      fontSize:18,
      top:250,
      position:"absolute",
      paddingVertical:12,
      width:"50%",
      backgroundColor:'#FFFFFF',
      borderRadius:18,
      marginLeft:100,
    },
    btnText:{
     color:" rgba(120, 181, 204, 0.9)",
     fontWeight:"700",
    },
    txtBtn:{
     flexDirection:"row",
     display:"flex",
      justifyContent:"space-between",
      marginTop:32,
      marginBottom:24,
      padding:20,
    },
    subHeading:{
      fontSize: 18,
      fontWeight:"600",
      color:"gray",
      //padding:20,
    },
    listWrapper: {
      marginBottom: 120,
      height: 320,
      paddingTop: 0,
      padding: 0,
    },
})