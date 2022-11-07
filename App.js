import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "./components/screen-wrapper";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/app-navigator";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenWrapper>
          <AppNavigator />
        </ScreenWrapper>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
