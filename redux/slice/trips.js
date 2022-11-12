import { createSlice } from "@reduxjs/toolkit";

const initialTripsState = {
  trips: [],
};

export const tripSlice = createSlice({
  name: "Trips",
  initialState: initialTripsState,
  reducers: {
    addTrip: (state, action) => {
      state.trips = [action.payload, ...state.trips];
    },
    addExpense: (state, action) => {
      const tripId = action.payload.tripId;
      const tripOfExpenses = state.trips.find((trip) => trip.id === tripId);
      tripOfExpenses.expenses = [
        ...tripOfExpenses.expenses,
        action.payload.expense,
      ];
      const tripOfExpensesIndex = state.trips.findIndex(
        (trip) => trip.id === tripId
      );
      state.trips[tripOfExpensesIndex] = tripOfExpenses;
    },
    updateExpense: (state, action) => {
      const tripId = action.payload.tripId;
      let expenseId = action.payload.newExpense.id;
      console.log("the shape of trips object", state.trips);
      console.log("redux", expenseId);
      //! single trip
      let trip = state.trips.find((trip) => trip.id === tripId);
      let tripIndex = state.trips.findIndex((trip) => trip.id === tripId);
      //! get the expenses array
      let triptExpensesIndex = trip.expenses.findIndex(
        (exp) => exp.id === expenseId
      );
      state.trips[tripIndex].expenses[triptExpensesIndex] =
        action.payload.newExpense;

      console.log("the new  shape of trips object", state.trips);
    },
  },
});
console.log(addExpense);
export const { addExpense, addTrip, updateExpense } = tripSlice.actions;
export default tripSlice.reducer;
