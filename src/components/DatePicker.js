import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from "react-native";
const WIDTH = Dimensions.get("window").width;


import DatePicker from "react-native-datepicker";

const DatePickerr = () => {
  const [date, setDate] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          androidMode={"spinner"}
          placeholder="Date of Birth"
         
          format="DD-MM-YYYY"
          minDate="01-01-1995"
          maxDate="01-01-2025"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            
            placeholderText:{color:'#000',opacity:0.5,fontWeight:'bold'},

            dateIcon: {
              display: "none",
            },
            dateText: {
        
              fontSize: 14,
              fontWeight:'bold',
             
            },
            dateInput: {
              borderRadius: 10,
              borderWidth: 0,
              
              position: "absolute",
              left: 0,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
    </View>
  );
};

export default DatePickerr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
   
  

  },

  datePickerStyle: {
    width: WIDTH-60,
    paddingHorizontal:12,
    borderBottomWidth:1,
    borderBottomColor:'lightgray'
    
    

  },
});
