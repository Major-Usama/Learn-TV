import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

const WIDTH = Dimensions.get("window").width;
import { Entypo } from "@expo/vector-icons";
import Button from "../components/Button";

export default function MyProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Entypo
          style={{ left: 20 }}
          onPress={() => navigation.openDrawer()}
          name="menu"
          size={30}
          color="#fff"
        />

        <Text style={styles.headerText}>My Profile</Text>
        <View />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View>
          <Image
            style={styles.imageCircle}
            source={require("../images/Group37.png")}
          />
        </View>

        <View style={{ marginTop: 25 }}>
          <View style={styles.contentcontainer}>
            <Text style={styles.title}>Full Name</Text>
            <Text style={styles.subtitle}>Sudesh Nimesha</Text>
            <View style={styles.seprator} />
          </View>
          <View style={styles.contentcontainer}>
            <Text style={styles.title}>E-mail Address</Text>
            <Text style={styles.subtitle}>Sudeshnimesha@gmail.com</Text>
            <View style={styles.seprator} />
          </View>

          <View style={styles.contentcontainer}>
            <Text style={styles.title}>Grade</Text>
            <Text style={styles.subtitle}>10</Text>
            <View style={styles.seprator} />
          </View>

          <View style={styles.contentcontainer}>
            <Text style={styles.title}>Parent Name</Text>
            <Text style={styles.subtitle}>Shanti Athukoralage</Text>
            <View style={styles.seprator} />
          </View>

          <View style={styles.contentcontainer}>
            <Text style={styles.title}>Parent Mobile Number</Text>
            <Text style={styles.subtitle}>945283827145</Text>
            <View style={styles.seprator} />
          </View>

          <View style={styles.contentcontainer}>
            <Text style={styles.title}>Date of Birth</Text>
            <Text style={styles.subtitle}>12/2/2000</Text>
            <View style={styles.seprator} />
          </View>

          <View style={styles.contentcontainer}>
            <Text style={styles.title}>Province</Text>
            <Text style={styles.subtitle}>Western</Text>
            <View style={styles.seprator} />
          </View>

          <View style={styles.contentcontainer}>
            <Text style={styles.title}>School Type</Text>
            <Text style={styles.subtitle}>International School</Text>
            <View style={styles.seprator} />
          </View>

          <View style={styles.contentcontainer}>
            <Text style={styles.title}>School Name</Text>
            <Text style={styles.subtitle}>Mahinda College , galle</Text>
            <View style={styles.seprator} />
          </View>

          <View style={styles.contentcontainer}>
            <Text style={styles.title}>Address</Text>
            <Text style={styles.subtitle}>441/5,Himbuntana,New Town</Text>
            <View style={styles.seprator} />
          </View>

          <View style={{ marginTop: 50, marginBottom: 50 }}>
            <Button
              title="Change Password"
              backColor={"#E12836"}
              bWidth={0}
              width={WIDTH - 80}
              onpress={() => navigation.navigate("ChangePasswordScreen")}
            />
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
  },

  header: {
    width: WIDTH,
    height: 60,
    backgroundColor: "#293241",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerText: {
    fontSize: 18,
    color: "#fff",
  },

  imageCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    borderWidth: 10,
    borderColor: "#EC7980",
    marginTop: 20,
  },

  title: {
    fontSize: 14,
    color: "#6E6868",
    marginHorizontal: 30,
  },
  subtitle: {
    fontSize: 15,
    color: "#000",
    lineHeight: 40,
    fontWeight: "bold",
    marginHorizontal: 30,
  },

  seprator: {
    width: WIDTH,
    height: 1,
    backgroundColor: "#B7B7B7",
    marginTop: 15,
  },
  contentcontainer: {
    marginBottom: 20,
  },
});
