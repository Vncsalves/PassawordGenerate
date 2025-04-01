import React from 'react'; 
import {  TextInput} from 'react-native';

import { styles } from './TextInStyles';

interface TextInProps{
  pass:string
}

export function TextIn(props : TextInProps) {
  return (

        <TextInput style={styles.inputer} value={props.pass}></TextInput>
    
  );
}
export default TextIn;
