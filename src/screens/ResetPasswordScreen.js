import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import Button from "../components/Button";


export default function ResetPasswordScreen({ navigation }) {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <ImageBackground
      resizeMode={"contain"}
      source={require("../images/loginBack.jpg")}
      style={styles.container}
    >
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#293241"
        translucent={false}
      />
      <ScrollView
       showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="ios-arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Reset your Password?</Text>

        <View style={styles.footer}>
          <Text style={styles.welcomesubTitle}>
            Please Enter a new password for your account
          </Text>
          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.input}
              mode="flat"
              label="New Password"
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              underlineColor="#D6D6D6"
            />

            <TextInput
              style={styles.input}
              mode="flat"
              label="Confirm Password"
              value={confirmPassword}
              secureTextEntry
              onChangeText={(text) => setConfirmPassword(text)}
              underlineColor="#D6D6D6"
            />
          </View>

          <View style={{ flex: 0.7, justifyContent: "flex-end" }}>
            <Button
              width ={WIDTH-60}
            title="Send" backColor="#E12836" bWidth={0} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#293241",
  },

  footer: {
    height: HEIGHT-50,
    width: WIDTH,
    backgroundColor: "#fff",
    borderTopLeftRadius: 90,
    marginTop: 40,
  },

  input: {
    width: WIDTH - 60,
    alignSelf: "center",
    backgroundColor: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
  },

  backButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  welcomesubTitle: {
    color: "#7D828B",
    textAlign: "left",
    lineHeight: 24,
    fontSize: 15,
    marginTop: 50,
    alignSelf: "center",
  },

  title: {
    fontSize: 28,
    color: "#fff",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 10,
  },
});
