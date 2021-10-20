import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
} from "react-native";
const WIDTH = Dimensions.get("window").width;
import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
export default function ConditionScreen1() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#293241"
        translucent={false}
      />
      <View style={styles.header}>
        <Entypo
           onPress={() =>navigation.openDrawer()}
        name="menu" size={30} color="#fff" />
        <Text style={styles.headerText}>Competition dashboard</Text>
      <Text
      onPress={()=>navigation.navigate('HomeScreen')}
      style={{color:'tomato',fontWeight:'bold',textDecorationLine:'underline'}}>Home</Text>
      </View>
       
       <Text
       onPress={()=>navigation.navigate('ConditionScreen2')}
       style={{color:'#000',fontSize:20,fontWeight:'bold',marginTop:20,textDecorationLine:'underline',alignSelf:'flex-end',marginRight:30}}
       >Skip{' -->'}</Text>
      <View
        style={{ flex: 0.7, justifyContent: "center", alignItems: "center" }}
      >
        <SimpleLineIcons
          style={{ alignSelf: "center" }}
          name="info"
          size={50}
          color="black"
        />
        <View>
          <Text style={styles.welcomeTitle}>Competition has started</Text>
          <Text style={styles.subs}>
            Please wait until the questions are{"\n"}
            displayed on the screen. Once{"\n"}
            started , answers will automatically{"\n"}
            be displayed here.you will be able{"\n"}
            to choose from options A, B, C, D.{"\n"}
            Answer as fast as possible. Answers{"\n"}
            will only be display for 15{"\n"}seconds
          </Text>
        </View>
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
    justifyContent: "space-around",
  },

  headerText: {
    fontSize: 18,
    color: "#fff",
  },
  welcomeTitle: {
    color: "#000",
    fontSize: 20,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 30,
  },
  subs: {
    color: "#7D828B",
    textAlign: "center",
    lineHeight: 24,
    fontSize: 17,
    marginTop: 20,
  },
});
