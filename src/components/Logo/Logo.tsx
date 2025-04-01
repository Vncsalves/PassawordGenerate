import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './LogoStyles';
import logo from '../../../assets/logo.png'

export function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Generate</Text>
      <Image source={logo} style={styles.image} />
    </View>
  );
}

export default Logo;
