import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const WIDTH = Dimensions.get("window").width;
import { Ionicons } from "@expo/vector-icons";

export default function WaitingApprovalScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={false}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.contentContainer}>
          <Image
            style={styles.image}
            source={require("../images/approval-min.jpg")}
          />

          <View style={{ marginTop: 25 }}>
            <Text style={styles.welcomeTitle}>Waiting Approval</Text>
            <Text style={styles.subs}>
              We are currently Reviewing your account.{"\n"}
              Once everything is is confirmed, you will be able{"\n"}
              be able to access the app and participate{"\n"}
              in our quiz competitions.
            </Text>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
              style={{ ...styles.buttonContainer }}
            >
              <Ionicons
                style={{ left: 20 }}
                name="md-arrow-back-outline"
                size={24}
                color="#fff"
              />
              <Text style={styles.buttonText}>Go back</Text>
              <View />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  contentContainer: {},

  image: {
    width: 220,
    height: 220,
    alignSelf: "center",
  },

  welcomeTitle: {
    color: "#000",
    fontSize: 24,
    lineHeight: 35,
    textAlign: "center",
  },
  subs: {
    color: "#7D828B",
    textAlign: "center",
    lineHeight: 24,
    fontSize: 14,
    marginTop: 20,
  },
  buttonContainer: {
    width: WIDTH - 40,
    height: 40,
    backgroundColor: "#E12836",
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
    flexDirection: "row",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
