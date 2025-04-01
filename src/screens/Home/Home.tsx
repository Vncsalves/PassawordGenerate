import React from "react";
import { Text, View, } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './Style'
import { Logo } from "../../components/Logo/Logo";

import ButtomGerar from "../../components/ButtomGerar/ButtomGerar";


export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}> 
                <Logo/>
            </View>
           <View style={styles.inputContainer}>
            
            <ButtomGerar/>
           </View>

        <StatusBar style="light"/>
        </View>
        
    )
    
}
