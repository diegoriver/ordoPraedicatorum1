import React from 'react';
import { ImageBackground, Text, ScrollView } from 'react-native';

import Oracion from './textos/listaOraciones.json';

import * as estilo from "../../../componentes/estilos";


export default function Angeluslatinp() {
  return (
  <ImageBackground source={require('../../../assets/Marca_agua_escudo_OP.jpg')} style={estilo.styles.imagebg}>
  
    <ScrollView  style={estilo.styles.container}>
      <Text> </Text>
      <Text style={estilo.styles.titulodia}>{Oracion.oracion2.nombre}</Text>
      <Text> </Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Oracion.oracion2.v1}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Oracion.oracion2.r1}</Text>
      <Text style={estilo.styles.cuerpo}>{Oracion.oracion2.cuerpo}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Oracion.oracion2.v2}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Oracion.oracion2.r2}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Oracion.oracion2.v3}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Oracion.oracion2.r3}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Oracion.oracion2.v4}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Oracion.oracion2.r4}</Text>
      <Text> </Text>
      <Text style={estilo.styles.nombre}>{Oracion.oracion2.oremos}</Text>
      <Text style={estilo.styles.cuerpo}>{Oracion.oracion2.oracion}</Text>
      <Text> </Text>
      <Text> </Text>
      
    </ScrollView>
  </ImageBackground>  
  );
}
