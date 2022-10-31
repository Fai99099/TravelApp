import { StyleSheet, Text, View,Platform } from 'react-native'
import React from 'react'

const ScreenWrapper = ({children}) => {
  return (
    <View style={styles.screenWrapper}>
    {children} 
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
   screenWrapper:{
paddingTop:Platform.OS ==='ios' ? 30:20,
paddingHorizontal:2,
paddingBottom:30,
backgroundColor:'white',
minHeight:'100%',
   },
})