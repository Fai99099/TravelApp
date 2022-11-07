import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EmptyList = () => {
  return (
    <View style={styles.emptyList}>
      <Text style={styles.message}>You haven't recorded any trip yet! :(</Text>
    </View>
  )
}

export default EmptyList

const styles = StyleSheet.create({
emptyList:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:24,
},
message:{
fontSize:14,
fontWeight:"600",
color:"gray",

},

})