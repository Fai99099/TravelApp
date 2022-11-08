
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home'
import AddTrip from '../screens/Add-trip'
import AddExpense from '../screens/Add-expenses'
import TripExpenses from '../screens/Trip-expenses';
import DropdownComponent from '../components/Dropdown-Component';
const Stack = createNativeStackNavigator();

const AppNavigator=()=>{
   return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false,}}/>
        <Stack.Screen name="Add Trip" component={AddTrip} options={{headerShown:false,}} />
        <Stack.Screen name="Add Expense" component={AddExpense} options={{headerShown:false,}} />
        <Stack.Screen name="Trip Expenses" component={TripExpenses} options={{headerShown:false,}}/>
      
        </Stack.Navigator>
   ) 
};
export default AppNavigator;