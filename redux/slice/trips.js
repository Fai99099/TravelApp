import { createSlice } from "@reduxjs/toolkit";


const initialTripsState = {
  trips: [],
};

export const tripSlice = createSlice({
  name: "Trips",
  initialState: initialTripsState,
  reducers: {
    addTrip: (state, action) => {
      state.trips = [...state.trips, action.payload];
    },
    addExpense: (state, action) => {
      console.log("addExpense", action.payload);
      const tripId = action.payload.tripId;
      console.log("tripId", tripId);
      const tripOfExpenses=state.trips.find(trip=>trip.id===tripId);
      console.log("TripOfExpenses", tripOfExpenses);
      tripOfExpenses.expenses=tripOfExpenses.expenses.concat(action.payload.expense);
      const tripOfExpensesIndex = state.trips.findIndex(trip=>trip.id===tripId);
      console.Consolelog("TripOfExpensesIndex", tripOfExpensesIndex);
      state.trips[tripOfExpensesIndex]=tripOfExpenses
      // state.trips = state.trips.map(trip => {
      //   if (trip.id === tripId) {
      //     trip.expenses = [...trip.expenses, action.payload.expense];
      //   }
      //   return trip;
      // });
    },
  },
});
console.log(addExpense)
export const { addExpense, addTrip } = tripSlice.actions;
export default tripSlice.reducer;
