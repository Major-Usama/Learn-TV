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
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
import { TextInput } from "react-native-paper";

import Button from "../components/Button";
import { ScrollView } from "react-native-gesture-handler";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <ImageBackground
      resizeMode={"cover"}
      source={require("../images/loginBack.jpg")}
      style={styles.container}
    >
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#293241"
        translucent={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="ios-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Image
          style={styles.topImage}
          source={require("../images/loginTopImage.png")}
        />

        <View style={styles.footer}>
          <View style={{ marginTop: 25 }}>
            <Text style={styles.welcomeTitle}>Welcome Back!</Text>
            <Text style={styles.welcomeSubTitle}>Sign in to continue</Text>
          </View>

          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.input}
              mode="flat"
              label="E-mail Address"
              value={email}
              onChangeText={(text) => setEmail(text)}
              underlineColor="#D6D6D6"
            />

            <TextInput
              style={styles.input}
              mode="flat"
              label="Password"
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              underlineColor="#D6D6D6"
            />
            <Text
              onPress={() => navigation.navigate("ForgotPasswordScreen")}
              style={styles.forgotPassword}
            >
              Forgot Password?
            </Text>
          </View>

          <View style={{ marginTop: 25 }}>
            <Button
              width={WIDTH - 60}
              title="Sign in"
              backColor="#E12836"
              bWidth={0}
              onpress={() => navigation.navigate("drawer")}
            />
          </View>

          <Text
            onPress={() => navigation.navigate("SignUpScreen")}
            style={styles.fotterText}
          >
            Don't have an account?
            <Text
              style={{
                ...styles.fotterText,
                color: "#7E9DD2",
                textDecorationLine: "underline",
              }}
            >
              Signup
            </Text>
          </Text>
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

  welcomeTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 35,
    textAlign: "center",
  },
  welcomesubTitle: {
    color: "#7D828B",
    textAlign: "center",
    lineHeight: 24,
    fontSize: 15,
    marginTop: 25,
  },

  buttonsContainer: {
    marginTop: 40,
  },
  topImage: {
    width: WIDTH - 120,
    height: HEIGHT / 2.8,
    alignSelf: "center",
    position: "absolute",
  },

  footer: {
    height: HEIGHT - 100,
    width: WIDTH,
    backgroundColor: "#fff",
    borderTopLeftRadius: 90,
    marginTop: HEIGHT / 4.5,
  },
  welcomeTitle: {
    color: "#0C0C0C",
    textAlign: "center",
    lineHeight: 30,
    fontSize: 24,
    marginTop: 25,
  },

  welcomeSubTitle: {
    color: "#B1B1B1",
    textAlign: "center",
    lineHeight: 24,
    fontSize: 15,
  },

  input: {
    width: WIDTH - 60,
    alignSelf: "center",
    backgroundColor: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
  },

  inputsContainer: {
    marginTop: 30,
  },
  forgotPassword: {
    color: "#000",
    fontSize: 14,
    opacity: 0.9,
    textDecorationLine: "underline",
    alignSelf: "flex-end",
    marginRight: 32,
    marginTop: 14,
  },

  fotterText: {
    color: "#000",
    fontSize: 14,
    opacity: 0.9,
    marginTop: 100,
    alignSelf: "center",
  },

  backButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    top: 20,
  },
});
