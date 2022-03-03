import * as React from 'react';
import { Text, ScrollView, Image } from 'react-native';

// se importan los estilo.styles desde estilos.js
import * as estilo from '../../../../../../../componentes/estilos';

import Salmos from '../../../textos/salmos.json';


export default function Salmomjueves() {
  return (
    <ScrollView style={estilo.styles.container}>
      <Text style={estilo.styles.nombre}>{Salmos.salmo15.nombre}</Text>
      <Text style={estilo.styles.titulo}>{Salmos.salmo15.titulo}</Text>
      <Image style={estilo.styles.imageSalmJue} source={require('../imagescompletorio/salmojueves.png')} />

      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>Ant. </Text>{Salmos.salmo15.antifona}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>TP. </Text>{Salmos.salmo15.TP}</Text>
      <Text></Text>
      
      <Text style={estilo.styles.cuerpo}>{Salmos.salmo15.cuerpo}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>Ant. </Text>{Salmos.salmo15.antifona}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>TP. </Text>{Salmos.salmo15.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}


