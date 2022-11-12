import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { Alert } from "react-native";
import { category_BG } from "../../theme/theme";
import EditIcon from "react-native-vector-icons/Feather";
import CancelIcon from "react-native-vector-icons/MaterialIcons";
import SaveIcon from "react-native-vector-icons/MaterialIcons";
import { updateExpense } from "../../redux/slice/trips";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ExpenseCard = ({ expense, tripId }) => {
  const [edit, setEdit] = useState(false);
  const [newAmount, setNewAmount] = useState(expense.amount);
  const [expenseData, setdata] = useState(expense);
  //const [costs, setCosts] = useState(expense.amount);

  console.log(typeof newAmount);
  const dispatch = useDispatch();
  console.log("expense", tripId);

  const handeleEditExpenese = () => {
    if (newAmount !== "") {
      let newExpense = { ...expense, amount: newAmount };
      console.log("this is new expense", newExpense, "old ", expense);

      const data = {
        tripId,
        newExpense,
      };
      console.log("this is new data", data);
      dispatch(updateExpense(data));
      setEdit(false);
    } else if (newAmount == "") {
      Alert.alert("Can't save, please enter a expense");
    }
  };
  return (
    <View
      style={{ ...styles.card, backgroundColor: category_BG[expense.category] }}
    >
      <View>
        <Text style={styles.expenseCategory}>{expense.category}</Text>
      </View>
      <View>
        <View>
          <View style={styles.x}>
            {edit ? (
              <TextInput
                onChangeText={(text) =>
                  setNewAmount(text.replace(/[^0-9]/g, ""))
                }
                value={newAmount.toString()}
                style={styles.input}
              />
            ) : (
              <Text style={styles.amount}>{expense.amount}</Text>
            )}
            <Text style={styles.RS}> RS </Text>

            <View>
              {edit ? (
                <Pressable onPress={() => setEdit(false)}>
                  <View>
                    <CancelIcon name="cancel" style={styles.icon} size={25} />
                  </View>
                </Pressable>
              ) : (
                <Pressable onPress={() => setEdit(true)}>
                  <View>
                    <EditIcon name="edit" style={styles.icon} size={20} />
                  </View>
                </Pressable>
              )}
            </View>

            <View>
              {edit ? (
                <Pressable onPress={() => handeleEditExpenese()}>
                  <View>
                    <SaveIcon
                      name="check-circle"
                      style={styles.icon}
                      size={25}
                    />
                  </View>
                </Pressable>
              ) : (
                <Pressable onPress={() => setEdit(true)}>
                  <View></View>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 18,
    marginHorizontal: 24,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amount: {
    fontSize: 16,
    color: "#666",
    fontWeight: "600",
  },
  expenseCategory: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  input: {
    height: 25,
    width: 60,
    margin: 0,
    borderWidth: 0,
    padding: 5,
    backgroundColor: "white",
  },
  RS: {
    //position:"absolute",
    //flex:1,
    //alignSelf: "flex-end",
    // justifyContent:"space-between",
    // padding:10,
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
  },
  x: {
    flexDirection: "row",
  },
  icon: {
    color: "grey",
  },
});
