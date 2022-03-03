import * as React from 'react';
import { ImageBackground, Text, ScrollView } from 'react-native';

import Oracion from './textos/listaOraciones.json';

import * as estilo from "../../../componentes/estilos";


export default function Reinap() {
  return (
    <ImageBackground source={require('../../../assets/Marca_agua_escudo_OP.jpg')} style={estilo.styles.imagebg}>

    <ScrollView  style={estilo.styles.container}>
      <Text> </Text>
      <Text style={estilo.styles.titulodia}>{Oracion.oracion3.nombre}</Text>
      <Text> </Text>
      <Text style={estilo.styles.cuerpo}>{Oracion.oracion3.cuerpo}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Oracion.oracion3.v1}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Oracion.oracion3.r1}</Text>
      <Text> </Text>
      <Text style={estilo.styles.nombre}>{Oracion.oracion3.oremos}</Text>
      <Text style={estilo.styles.cuerpo}>{Oracion.oracion3.oracion}</Text>
      <Text> </Text>
      <Text> </Text>
      
    </ScrollView>
    </ImageBackground> 

  );
}

