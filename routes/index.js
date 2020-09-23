import React, { Component } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "../screens/Splash";
import Profile from "../screens/Profile";
import QRCodeApp from "../screens/QRCodeApp";


const Stack = createStackNavigator();

// stack navigator
class Route extends Component {
  render() {
    return (
      <NavigationContainer
        theme={DarkTheme}
        //   theme={this.props.theme === "dark" ? DarkTheme : DefaultTheme}
      >
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="QRCode" component={QRCodeApp} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Route;
