import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { rgb, white } from 'chalk';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.abacate}>Bem-Vindo!</Text>
      <img src={\millo appi\aplicatuaivo\assets\millologo.png} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E4EAED',
    alignItems:'center',
    justifyContent:'center'
  },
  abacate:{
    textAlignVertical: 'top',
    textShadowColor: '#000',
    paddingBottom: 500,
    fontSize: 50,
    color: '#2E2D2D'
  },
})
