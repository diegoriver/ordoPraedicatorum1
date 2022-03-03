import * as React from 'react';
import { Text, ScrollView, ImageBackground } from 'react-native';

import Oracion from './textos/listaOraciones.json';

import * as estilo from "../../../componentes/estilos";

export default function Pangep() {
  return (
    <ImageBackground source={require('../../../assets/Marca_agua_escudo_OP.jpg')} style={estilo.styles.imagebg}>

    <ScrollView  style={estilo.styles.container}>
      <Text style={estilo.styles.titulodia}>{Oracion.oracion13.nombre}</Text>
      <Text> </Text>
      <Text style={estilo.styles.cuerpo}>{Oracion.oracion13.cuerpo}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Oracion.oracion13.v1}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Oracion.oracion13.r1}</Text>
      <Text> </Text>
      <Text style={estilo.styles.nombre}>{Oracion.oracion13.oremos}</Text>
      <Text style={estilo.styles.cuerpo}>{Oracion.oracion13.oracion}</Text>
      <Text> </Text>
      <Text> </Text>

      <Text style={estilo.styles.titulodia}>{Oracion.oracion14.nombre}</Text>
      <Text> </Text>
      <Text style={estilo.styles.cuerpo}>{Oracion.oracion14.cuerpo}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Oracion.oracion14.v1}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Oracion.oracion14.r1}</Text>
      <Text> </Text>
      <Text style={estilo.styles.nombre}>{Oracion.oracion14.oremos}</Text>
      <Text style={estilo.styles.cuerpo}>{Oracion.oracion14.oracion}</Text>
      <Text> </Text>
      <Text> </Text>      
    </ScrollView>
    </ImageBackground> 

  );
}

