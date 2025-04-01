import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Centraliza os elementos
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: "#222427"
  },
  image: {
    width: 200, // Defina o tamanho correto da imagem
    height: 200,
    resizeMode: 'contain',
  },
});
