import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EmptyExpense = () => {
  return (
    <View style={styles.emptyExpense}>
      <Text style={styles.message}>You haven't recorded any expenses for this trip ! :(</Text>
    </View>
  )
}

export default EmptyExpense

const styles = StyleSheet.create({
emptyExpense:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:200,
},
message:{
fontSize:14,
fontWeight:"600",
color:"gray",

},

})