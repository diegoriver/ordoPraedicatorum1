import * as React from 'react';
import { ImageBackground, Text, ScrollView } from 'react-native';

import Oracion from './textos/listaOraciones.json';

import * as estilo from "../../../componentes/estilos";


export default function Virgenp() {
  return (
    <ImageBackground source={require('../../../assets/Marca_agua_escudo_OP.jpg')} style={estilo.styles.imagebg}>

    <ScrollView  style={estilo.styles.container}>
      <Text> </Text>
      <Text style={estilo.styles.titulodia}>{Oracion.oracion8.nombre}</Text>
      <Text> </Text>
      <Text style={estilo.styles.cuerpo}>{Oracion.oracion8.cuerpo}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Oracion.oracion8.v1}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Oracion.oracion8.r1}</Text>
      <Text> </Text>
      <Text> </Text>
      
    </ScrollView>
    </ImageBackground> 

  );
}

