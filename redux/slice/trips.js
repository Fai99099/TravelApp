import { createSlice } from "@reduxjs/toolkit";

//state
const initialTripsState={
    trips:[],
};

export const tripSlice=createSlice({
    name:'Trip',
    initialState:initialTripsState,
reducers:{
    addTrip:(state,action)=>{
        state.trips=[...state.trips,action.pyload];
    },
    addExpense:(state,action)=>{
        const tripId = action.payload.tripId;
        state.trips=state.trips.map(trip=>{
            if(trip.id==tripId){
            trip.expenses=[...trip.expenses,action.payload.expense];
            }
            return trip;
        });
    },
},
});
export const {addExpenses,  addTrip}=tripSlice.actions;
export default tripSlice.reducer;
