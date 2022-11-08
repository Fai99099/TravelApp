import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { category_BG } from '../../theme/theme'

const ExpenseCard = ({expense}) => {
  return (
    <View style={{...styles.card,backgroundColor:category_BG[expense.category]}}>
    <View>
     <Text style={styles.expenseCategory}>{expense.category}</Text>
    </View>
    <View>
     <Text style={styles.amount}>{expense.amount} RS</Text>
    </View>
    </View>
  )
}

export default ExpenseCard

const styles = StyleSheet.create({
    card: {
        padding:20,
        borderRadius:18,
        marginHorizontal:24,
        marginBottom:20,
       display:"flex",
       flexDirection: "row",
       justifyContent: "space-between",
       alignItems: "center",

    },
    amount:{
        fontSize:16,
        color:"#666",
        fontWeight:"600",
    },
    expenseCategory:{
      fontSize:16,
      color:"#666",
      fontWeight:"500",
      
    },
})