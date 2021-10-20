import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

import Button from "../components/Button";
export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      resizeMode={"contain"}
      source={require("../images/welcome-min.jpg")}
      style={styles.container}
    >
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#293241"
        translucent={false}
      />

      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.welcomeTitle}>Welcome to Learn Tv</Text>
          <Text style={styles.welcomeTitle}>Quiz App</Text>

          <Text style={styles.welcomesubTitle}>
            Watch the show every week .anser questions as fast{"\n"}
            as possible to stay in the leaderboard every week.{"\n"}a quiz game
            for children of all ages!
          </Text>

          <View style={styles.buttonsContainer}>
            <Button
              width ={WIDTH-80}
              title="Sign in"
              backColor="#293241"
              bWidth={2}
              onpress={() => navigation.navigate("LoginScreen")}
            />
            <Button
            width ={WIDTH-80}
            title="Sign up" backColor="#E12836" bWidth={0}
                 onpress={() => navigation.navigate("SignUpScreen")}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#293241",
    justifyContent: "center",
  },
  contentContainer: {
    height: HEIGHT / 15,
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
});
