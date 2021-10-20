import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper";

const WIDTH = Dimensions.get("window").width;
import { Entypo } from "@expo/vector-icons";
import Button from "../components/Button";
export default function ChangePasswordScreen({ navigation }) {
  const [currentpassword, setcurrentPassword] = React.useState("");
  const [newpassword, setnewPassword] = React.useState("");
  const [confirmnewpassword, setConfirmnewPassword] = React.useState("");
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

        <Text style={styles.headerText}>Change Password</Text>
        <View />
      </View>

      <View style={{ marginTop: 30 }}>
        <TextInput
          style={styles.input}
          left={<TextInput.Icon name="lock" color={"#000"} size={20} />}
          mode="flat"
          label="Enter Your Current Password"
          value={currentpassword}
          secureTextEntry
          onChangeText={(text) => setcurrentPassword(text)}
          underlineColor="#D6D6D6"
        />

        <TextInput
          style={styles.input}
          mode="flat"
          left={<TextInput.Icon name="lock" color={"#000"} size={20} />}
          label="Enter Your New Password"
          value={newpassword}
          secureTextEntry
          onChangeText={(text) => setnewPassword(text)}
          underlineColor="#D6D6D6"
        />

        <TextInput
          style={styles.input}
          mode="flat"
          label="Confirm Your New Password"
          left={<TextInput.Icon name="lock" color={"#000"} size={20} />}
          value={confirmnewpassword}
          secureTextEntry
          onChangeText={(text) => setConfirmnewPassword(text)}
          underlineColor="#D6D6D6"
        />
      </View>

      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Button
          title="Save"
          backColor={"#E12836"}
          bWidth={0}
          width={WIDTH - 80}
          onpress={() => {
            currentpassword.length > 0 &&
            newpassword.length > 0 &&
            confirmnewpassword.length > 0
              ? Alert.alert("Password Updated")
              : Alert.alert("You are missing some fields");
          }}
        />
      </View>
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

  input: {
    width: WIDTH,
    alignSelf: "center",
    backgroundColor: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
    paddingHorizontal: 50,
  },
});
