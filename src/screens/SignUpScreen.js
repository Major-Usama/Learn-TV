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
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

import { TextInput } from "react-native-paper";
import { Ionicons,AntDesign ,Feather} from "@expo/vector-icons";
import SelectPicker from "react-native-form-select-picker";
import Button from "../components/Button";
import DatePickerr from "../components/DatePicker";

const grades = ["1", "2","3","4","5","6","7","8","9","10","11","12"];
const provinces = ["Province 1", "Province 2","Province 3","Province 4","Province 5"];

const schoolTypes = ["Government School", "Private School","Cadet Schools"];
const schools = ["School 1","School 2","School 3","other"];

export default function SignUpScreen({ navigation }) {
  const [name, setName] = React.useState("");
  const [lastname, setlastName] = React.useState("");
  const [email, setEmail] = React.useState("");
//picker
  const [grade, setGrade] = React.useState("");
  const [parentName, setParentName] = React.useState("");
  const [parentNumber, setParentNumber] = React.useState("");
  const [homeNumber, sethometNumber] = React.useState("");

  const [nicNumber, setnicNumber] = React.useState("");
  const [currentAddress, setcurrentAddress] = React.useState("");

// Pickers
  const [province, setProvince] = React.useState("");
  const [schoolType, setSchoolType] = React.useState("");
  const [school, setSchool] = React.useState("");

  const [cschool, setcSchool] = React.useState("");

  const [password, setPassword] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("none");





  function MyCheckbox() {
    const [checked, onChange] =React.useState(false);
  
    function onCheckmarkPress() {
      onChange(!checked);
    }
  
    return (
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={onCheckmarkPress}
      >
        {checked && <Ionicons name="checkmark" size={16} color="#fff" />}
      </Pressable>
    );
  }
  



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
     
   
    

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="ios-arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Nice To meet you !</Text>
        <Text style={styles.subTitle}>Lets create your account</Text>

        <KeyboardAvoidingView
    style={{ flex: 1, }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
        <View style={styles.footer}>
        
        <ScrollView
    showsVerticalScrollIndicator={false}
    style={{marginTop:25}}
    contentContainerStyle={{paddingBottom:300}}
   
   >

        <View style={styles.inputsContainer}>
            <TextInput
              style={styles.input}
              mode="flat"
              placeholderTextColor= '#000000'
              label="First Name"
              value={name}
              onChangeText={(text) => setName(text)}
              underlineColor="#D6D6D6"
            />

            <TextInput
              style={styles.input}
              mode="flat"
              placeholderTextColor= '#000000'
              label="Last Name"
              value={lastname}
              onChangeText={(text) => setlastName(text)}
              underlineColor="#D6D6D6"
            />

          <TextInput
              style={styles.input}
              mode="flat"
              label="E-mail Address"
              placeholderTextColor= '#000000'
              value={email}
              onChangeText={(text) => setEmail(text)}
              underlineColor="#D6D6D6"
            />

            <View
                style={{
                  ...styles.input,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  
                }}
              >
                <SelectPicker
                  titleTextStyle={{
                    fontSize: 20,
                    color: "red",
                  }}
                  placeholder ="Select your grade"
                  placeholderStyle={{color:'#000', fontWeight: "bold",
                  fontSize: 14,opacity:0.5}}
                  style={styles.picker}
                  onValueChange={(value) => {
                    setGrade(value);
                  }}
                  selected={grade}
                >
                  {Object.values(grades).map((val, index) => (
                    <SelectPicker.Item label={val} value={val} key={index} />
                  ))}
                </SelectPicker>

               
                <AntDesign 
                 style={{ position: "absolute", right: 20, zIndex: 9999 }}
                name="caretdown" size={16} color="black" />
              </View>
           
           <View
           style={{display:grade==='11'||grade==='12' ?'flex':'none'}}
           >
              <TextInput
              style={styles.input}
              mode="flat"
              placeholderTextColor= '#000000'
              label="Parent Name"
              value={parentName}
              onChangeText={(text) => setParentName(text)}
              underlineColor="#D6D6D6"
            />
            </View>
         
            <View
            style={{display:grade==='11'||grade==='12' ?'flex':'none'}}
           >
            <TextInput
              style={styles.input}
              mode="flat"
              placeholderTextColor= '#000000'
              label="Parent Number"
              value={parentNumber}
              onChangeText={(text) => setParentNumber(text)}
              underlineColor="#D6D6D6"
            />

             </View>

            <TextInput
              style={styles.input}
              mode="flat"
              placeholderTextColor= '#000000'
              label="Home Number"
              value={homeNumber}
              onChangeText={(text) => sethometNumber(text)}
              underlineColor="#D6D6D6"
            />
               
               <View
           style={{display:grade==='11'||grade==='12' ?'flex':'none'}}
           > 
            <TextInput
              style={styles.input}
              mode="flat"
              placeholderTextColor= '#000000'
              label="NIC Number (Students above 16)"
              value={nicNumber}
              onChangeText={(text) => setnicNumber(text)}
              underlineColor="#D6D6D6"
            />
            </View>


            <TextInput
              style={styles.input}
              mode="flat"
              placeholderTextColor= '#000000'
              label="Current Address"
              value={currentAddress}
              onChangeText={(text) => setcurrentAddress(text)}
              underlineColor="#D6D6D6"
            />


                <View
                style={{
                  ...styles.input,
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop:20,
                

                }}
              >
                <DatePickerr />

          
                <Ionicons
                style={{
                  
                    right:18,
                  
  
                  }}
                name="calendar-outline" size={24} color="black" />
              </View>

              <View
                style={{
                  ...styles.input,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop:15,
                 
                  
                }}
              >
                <SelectPicker
                  titleTextStyle={{
                    fontSize: 20,
                    color: "red",
                  }}
                  placeholder ="Select your Province"
                  placeholderStyle={{color:'#000', fontWeight: "bold",
                  fontSize: 14,opacity:0.5}}
                  style={styles.picker}
                  onValueChange={(value) => {
                    setProvince(value);
                  }}
                  selected={province}
                >
                  {Object.values(provinces).map((val, index) => (
                    <SelectPicker.Item label={val} value={val} key={index} />
                  ))}
                </SelectPicker>

               
                <AntDesign 
                 style={{ position: "absolute", right: 20, zIndex: 9999 }}
                name="caretdown" size={16} color="black" />
              </View>

              <View
                style={{
                  ...styles.input,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                 
                  marginTop:10,
                 
                  
                }}
              >
                <SelectPicker
                  titleTextStyle={{
                    fontSize: 20,
                    color: "red",
                  }}
                  placeholder ="Select your School Type"
                  placeholderStyle={{color:'#000', fontWeight: "bold",
                  fontSize: 14,opacity:0.5}}
                  style={styles.picker}
                  onValueChange={(value) => {
                    setSchoolType(value);
                  }}
                  selected={schoolType}
                >
                  {Object.values(schoolTypes).map((val, index) => (
                    <SelectPicker.Item label={val} value={val} key={index} />
                  ))}
                </SelectPicker>

               
                <AntDesign 
                 style={{ position: "absolute", right: 20, zIndex: 9999 }}
                name="caretdown" size={16} color="black" />
              </View>
              

                  
              <View
                style={{
                  ...styles.input,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  
                }}
              >
                <SelectPicker
                  titleTextStyle={{
                    fontSize: 20,
                    color: "red",
                  }}
                  placeholder ="Select your School"
                  placeholderStyle={{color:'#000', fontWeight: "bold",
                  fontSize: 14,opacity:0.5}}
                  style={styles.picker}
                  onValueChange={(value) => {
                    setSchool(value);
                  }}
                  selected={school}
                >
                  {Object.values(schools).map((val, index) => (
                    <SelectPicker.Item label={val} value={val} key={index} />
                  ))}
                </SelectPicker>

               
                <AntDesign 
                 style={{ position: "absolute", right: 20, zIndex: 9999 }}
                name="caretdown" size={16} color="black" />
              </View>
                  
               
               <View  style={{display:school==='other'?'flex':'none'}}>

              <TextInput
              style={styles.input}
              mode="flat"
              placeholderTextColor= '#000000'
              label="Enter your School (Conditional)"
              value={cschool}
              onChangeText={(text) =>setcSchool(text)}
              underlineColor="#D6D6D6"
            />

            </View>

             <TextInput
              style={styles.input}
              mode="flat"
              placeholderTextColor= '#000000'
              label="Enter your Password"
              value={password}
              secureTextEntry
              onChangeText={(text) =>setPassword(text)}
              underlineColor="#D6D6D6"
            />

            <TextInput
              style={styles.input}
              mode="flat"
              placeholderTextColor= '#000000'
              label="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(text) =>setconfirmPassword(text)}
              underlineColor="#D6D6D6"
            />


                <View style={styles.checkBoXContainer}>
              <MyCheckbox />
              <Text style={styles.footerText}>
                I agree to <Text style={{...styles.footerText,color:'#4286FF',textDecorationLine:'underline'}}>Terms and Conditions</Text> of Learn Tv
              </Text>
            </View>
            
            <Button 
              width ={WIDTH-60}
            title="Sign up" backColor="#E12836" bWidth={0}
                 onpress={() => navigation.navigate("WaitingApprovalScreen")}
            />
          </View>
          
          </ScrollView>
        </View>
        </KeyboardAvoidingView>
        
     </ImageBackground>
   
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#293241",
    
  },

  footer: {
 
    backgroundColor: "#fff",
    borderTopLeftRadius: 90,
    marginTop: 20,

    width:WIDTH,
    height:HEIGHT,
    
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
  

  title: {
    fontSize: 28,
    color: "#fff",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 0,
  },
  subTitle:
  {
      color:'#CDCCD1',
      fontSize:16,
     textAlign:'center',


  },
  input: {
    width: WIDTH - 60,
    alignSelf: "center",
    backgroundColor: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
    
  },

  inputsContainer:
  {
      marginTop:30
  },

  picker: {
    width: WIDTH-60,
    height: 60,
    justifyContent: "center",
    borderBottomWidth:1,
    borderBottomColor:'lightgray',

  },

  checkboxContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#293241",
    backgroundColor: "transparent",
  },

  checkboxChecked: {
    backgroundColor: "#293241",
  },

  footerText: {
    fontSize: 14,
   marginRight:10,
    color: "#000A32",
    marginLeft: 10,
  },
  checkBoXContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
    paddingBottom: 50,
    fontWeight: "400",
  },
});
