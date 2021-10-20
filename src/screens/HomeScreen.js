import React, { useState,useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Animated,
  ScrollView,
  TouchableOpacity
} from "react-native";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Modal from "react-native-modal";
import Button from "../components/Button";

const Progress = ({ step, steps, height }) => {
  const [width, setWidth] = React.useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  React.useEffect(() => {
    reactive.setValue(-width - 40 + (width * step) / steps);
  }, [step, width]);

  return (
    <View
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width;

        setWidth(newWidth);
      }}
      style={{
        height: 15,
        backgroundColor: "#fff",
        borderRadius: 5,
        overflow: "hidden",
        borderWidth: 1,
        width: WIDTH - 40,
        alignSelf: "center",
      }}
    >
      <Animated.View
        style={{
          height: 15,
          borderRadius: 5,
          backgroundColor: "#000000",
          width: WIDTH,
          position: "absolute",
          left: 0,
          top: 0,
          transform: [
            {
              translateX: animatedValue,
            },
          ],
        }}
      ></Animated.View>
    </View>
  );
};

export default function HomeScreen({ navigation }) {
  const [backA, setBackA] = useState("#293241");
  const [backB, setBackB] = useState("#293241");
  const [backC, setBackC] = useState("#293241");
  const [backD, setBackD] = useState("#293241");

  const [disableA, setDisableA] = useState(false);
  const [disableB, setDisableB] = useState(false);
  const [disableC, setDisableC] = useState(false);
  const [disableD, setDisableD] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  useEffect(() => {

    setTimeout(() => {
      toggleModal()
      },1000);
    
  }, [])


  const onPressA = () => {
    setBackA("#E12836");
    setBackB("#293241");
    setBackC("#293241");
    setBackD("#293241");

    setDisableA(false);
    setDisableB(true);
    setDisableC(true);
    setDisableD(true);
  };

  const onPressB = () => {
    setBackB("#E12836");
    setBackA("#293241");
    setBackC("#293241");
    setBackD("#293241");

    setDisableB(false);
    setDisableA(true);
    setDisableC(true);
    setDisableD(true);
  };

  const onPressC = () => {
    setBackC("#E12836");
    setBackB("#293241");
    setBackA("#293241");
    setBackD("#293241");

    setDisableC(false);
    setDisableB(true);
    setDisableA(true);
    setDisableD(true);
  };

  const onPressD = () => {
    setBackD("#E12836");
    setBackB("#293241");
    setBackC("#293241");
    setBackA("#293241");

    setDisableD(false);
    setDisableB(true);
    setDisableC(true);
    setDisableA(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#293241"
        translucent={false}
      />


<Modal

isVisible={isModalVisible}>
      
        

        
         <View
       
         style ={{width:WIDTH-40,borderRadius:30,overflow:'hidden',height:HEIGHT/1.1,alignSelf:'center',backgroundColor:'#fff'}}
         >
              

             <Text style={{fontSize:20,color:'#000',alignSelf:'center',marginTop:30,}}>How it works</Text>
              
              <View style={{padding:20}}>
            <Text style={{textAlign:'center',lineHeight:22}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.{'\n'}
             It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently
             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum{'\n'}
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently
             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

            </Text>
            </View>
              <TouchableOpacity
         
         activeOpacity={0.7}
         style={styles.nextButton}
       >
    
       </TouchableOpacity>
       <View style={{justifyContent:'flex-end',flex:1,}}>
       <Button

                title="I Understand!"
                backColor={"#E12836"}
                bWidth={0}
                width={WIDTH - 80}
                onpress={()=>toggleModal()}
              />
              </View>

           </View>
   
     </Modal>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:20}}
      >
      <View style={styles.header}>
        <Entypo
          onPress={() => navigation.openDrawer()}
          name="menu"
          size={30}
          color="#fff"
        />
        <Text style={styles.headerText}>Competition dashboard</Text>
        <View />
      </View>

      <View>
        <Text style={styles.title}>Competition in Progress</Text>
        <Text style={styles.description}>
          Answer the questions as fast as you can to increase{"\n"}
          your chances of winning
        </Text>

        <View>
          <Text style={styles.quesions}>
            Questions 01/
            <Text
              style={{ ...styles.quesions, fontWeight: "normal", fontSize: 12 }}
            >
              15
            </Text>
          </Text>
          <Progress step={1} steps={10} height={4} />
        </View>

        <View>
          <Text style={styles.timeremain}>Time remaining</Text>

          <View style={{ alignSelf: "center", marginTop: 20 }}>
            <CountdownCircleTimer
              size={120}
              strokeWidth={8}
              isPlaying
              trailColor={"#313131"}
              duration={15}
              colors={[["#E12836"]]}
            >
              {({ remainingTime, animatedColor }) => (
                <Animated.Text style={{ color: animatedColor, fontSize: 60 }}>
                  {remainingTime}
                </Animated.Text>
              )}
            </CountdownCircleTimer>
          </View>

          <View>
            <Text style={styles.answer}>Select your Answer</Text>
            <View style={{ marginTop: 20 }}>
              <Button
                title="Answer A"
                backColor={backA}
                bWidth={0}
                onpress={() => onPressA()}
                width={WIDTH - 40}
                disable={disableA}
              />

              <Button
                title="Answer B"
                backColor={backB}
                bWidth={0}
                width={WIDTH - 40}
                disable={disableB}
                onpress={() => onPressB()}
              />

              <Button
                title="Answer C"
                backColor={backC}
                bWidth={0}
                width={WIDTH - 40}
                disable={disableC}
                onpress={() => onPressC()}
              />

              <Button
                title="Answer D"
                backColor={backD}
                bWidth={0}
                width={WIDTH - 40}
                disable={disableD}
                onpress={() => onPressD()}
              />
            </View>
          </View>
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
    justifyContent: "space-around",
  },

  headerText: {
    fontSize: 18,
    color: "#fff",
  },
  title: {
    fontSize: 24,

    color: "#000000",
    marginTop: 20,
    marginHorizontal: 20,
  },

  description: {
    color: "#000000",
    fontSize: 13,
    textAlign: "left",
    marginHorizontal: 20,
    marginTop: 14,
    opacity: 0.7,
  },

  quesions: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 10,
  },

  timeremain: {
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 20,
    opacity: 0.7,
  },
  answer: {
    fontSize: 18,
    opacity: 0.7,
    color: "#000000",
    marginTop: 20,
    marginHorizontal: 20,
  },
});
