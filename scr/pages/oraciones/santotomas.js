import * as React from 'react';
import { ImageBackground, Text, ScrollView } from 'react-native';

import Oracion from './textos/listaOraciones.json';

import * as estilo from "../../../componentes/estilos";


export default function Santotomasp() {
  return (
    <ImageBackground source={require('../../../assets/Marca_agua_escudo_OP.jpg')} style={estilo.styles.imagebg}>

    <ScrollView  style={estilo.styles.container}>
      <Text> </Text>
      <Text style={estilo.styles.titulodia}>{Oracion.oracion7.nombre}</Text>
      <Text> </Text>
      <Text style={estilo.styles.cuerpo}>{Oracion.oracion7.cuerpo}</Text>
      <Text> </Text>
      <Text> </Text>
      
    </ScrollView>
    </ImageBackground> 

  );
}

