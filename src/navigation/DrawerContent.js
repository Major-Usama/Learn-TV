import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar, Title,
    Drawer, Caption
} from 'react-native-paper';
import { Ionicons,SimpleLineIcons,AntDesign ,Entypo} from '@expo/vector-icons'; 
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';





function DrawerContent(props) {
    
    return (
        <View style={{flex:1, backgroundColor:'#293241'}}> 
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.imageContainer}>
                        <Entypo 

                        onPress={() =>props.navigation.closeDrawer()}
                        name="menu" size={30} color="#fff" />


                            <View style={styles.nameContainer}>
                                <Title style={styles.title}>HELLO</Title>
                                <Caption style={styles.caption}>Sudesh Nimesha</Caption>
                            </View>
                        </View>

                        <View  style={styles.seprator}/>
                        
                    </View>

                    <Drawer.Section style={{
                        marginTop: 40, 
                    }}>
                         <DrawerItem labelStyle={{ fontWeight:'bold',color:"#fff"}}
                    icon={({ color, size }) => (
                        <Ionicons name="person-add-outline" size={20} color="#fff" />
                    )}
                    label="My Profile"
                    onPress = {() => {props.navigation.navigate("MyProfileScreen")}}
                        />

                         <DrawerItem labelStyle={{fontWeight:'bold',color:"#fff"}}
                    icon={({ color, size }) => (
                        <AntDesign name="questioncircleo" size={20} color="#fff" />
                    )}
                    label="How to Play"
                    onPress = {() => {props.navigation.navigate("ConditionScreen1")}}
                        />

                        

                       

                         <DrawerItem labelStyle={{fontWeight:'bold',color:"#fff"}}
                    icon={({ color, size }) => (
                        <SimpleLineIcons name="logout" size={20} color="#fff" />
                    )}
                    label="Logout" 
                    onPress = {() => { props.navigation.navigate("LoginScreen") }} //it will navigate to SignIn screen
                />
                    </Drawer.Section>
    
                </View>
            </DrawerContentScrollView>

           
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex:1,
        
    },
    userInfoSection: {
        
    },
    imageContainer: {
     marginTop:('5%'),
     marginHorizontal:20,
    },
    nameContainer: {
        
        marginTop:20,
    }, 
    title: {
        fontSize: 18,
        marginTop: 3,
        fontWeight:'bold',
        color:"#ffffff",
    },
    caption: {
        fontSize: 13,
        lineHeight: 14,
        color:"#ffffff",
        opacity:0.7,
    },
    row: {
        marginTop: 20,
         flexDirection: 'row',
        alignItems:'center'
    },
    drawerSection: {
        marginTop:15
    },
    textStyle: {
          fontSize: 14,
         fontFamily:'CamporaBold'
    },

    seprator:
    {
        width:('100%'),
        height:1,
        backgroundColor:'#fff',
        opacity:0.3,
        marginTop:30,

    
    }
})

export default DrawerContent;