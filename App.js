
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function App(){

  const convertir= (valor)=>{

    const resultado=valor*24.8;
    setEntrada(valor);
    setConversion(resultado);
  }

  const inicializar= () =>{
    setConversion(0);
    setEntrada(0);
  }
  return(
    <>
    <SafeAreaView style={misEstilos.encabezado}>
     <view>
          <text style={misEstilos.sectiontitle}>Convertidor de Moneda</text>
      
     </view>

    </SafeAreaView>
    <view>
    <Text style={misEstilos.sectionDescription}>Valor en Dolares:</Text>    
<TextInput
style={misEstilos.Input}
placeholder="Escriba un valor en $"
keyboardType="numeric"
onChange={(e)=> convertir(e.nativeEvent.text)}
defaultValue={entrada.toString()}
/>
<Text style={misEstilos.sectionDescription}>Valor en Lempiras:</Text>
<TextInput
style={misEstilos.Input}
placeholder="Escriba un valor en Lps"
defaultvalue={conversion.toString()}
/>
<button
title="Calcular"
color="#3F5185"
onPress="inicializar"
></button>
    </view>
    </>
  )
}

const misEstilos = StyleSheet.create({
  encabezado:{
    backgroundColor: '#8A83F4',
    heigth: 200,
    borderbottonrigthradius:30,
    borderBottomLeftRadius:30,
    alignItems: 'center' 

  },
  imput:{
    height:40,
    margin:12,
    borderwidth:1
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
