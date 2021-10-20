import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import SignUpScreen from "../screens/SignUpScreen";
import WaitingApprovalScreen from "../screens/WaitingApprovalScreen";

import ConditionScreen1 from "../screens/ConditionScreen1";
import ConditionScreen2 from "../screens/ConditionScreen2";
import ConditionScreen3 from "../screens/ConditionScreen3";
import ConditionScreen4 from "../screens/ConditionScreen4";
import ConditionScreen5 from "../screens/ConditionScreen5";
import HomeScreen from "../screens/HomeScreen";
import DrawerContent from "./DrawerContent";
import MyProfileScreen from "../screens/MyProfileScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={"none"}
        screenOptions={{}}
        initialRouteName={"WelcomeScreen"}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />

        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

        <Stack.Screen
          name="WaitingApprovalScreen"
          component={WaitingApprovalScreen}
        />
        <Stack.Screen name="ConditionScreen1" component={ConditionScreen1} />
        <Stack.Screen name="ConditionScreen2" component={ConditionScreen2} />
        <Stack.Screen name="ConditionScreen3" component={ConditionScreen3} />
        <Stack.Screen name="ConditionScreen4" component={ConditionScreen4} />
        <Stack.Screen name="ConditionScreen5" component={ConditionScreen5} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
        />
        <Stack.Screen name="drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="drawer"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="drawer" component={HomeScreen} />
      <Stack.Screen name="ConditionScreen1" component={ConditionScreen1} />
      <Stack.Screen name="ConditionScreen2" component={ConditionScreen2} />
      <Stack.Screen name="ConditionScreen3" component={ConditionScreen3} />
      <Stack.Screen name="ConditionScreen4" component={ConditionScreen4} />
      <Stack.Screen name="ConditionScreen5" component={ConditionScreen5} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
    </Drawer.Navigator>
  );
}
