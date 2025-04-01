import React, { useState } from 'react';
import { View, Button, Text, Pressable} from 'react-native';
import TextIn from "../../components/TextInput/TextIn";
import { styles } from './ButtomGerarStyles';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard'

export function ButtomGerar() {
    const [pass, setPass] = useState('')


    function handleGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)
    }

    
    function handCopyButtom(){
        Clipboard.setStringAsync(pass)
    }
  return (

    <>
    <TextIn pass={pass}/>

    <Pressable 
    style={styles.buttom}
    onPress={handleGenerateButton}>
      <Text style={styles.text}>Generate</Text>
    </Pressable>

    <Pressable 
    style={styles.buttom}
    onPress={handCopyButtom}>
      <Text style={styles.text}>Copy</Text>
    </Pressable>

    </>
  );
}

export default ButtomGerar;