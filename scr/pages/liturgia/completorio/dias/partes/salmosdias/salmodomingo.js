import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image} from 'react-native';

// se importan los estilo.styles desde estilos.js
import * as estilo from '../../../../../../../componentes/estilos';

import Salmos from '../../../textos/salmos.json';


export default function Salmodomingo() {
  return (
    <ScrollView style={estilo.styles.container}>
      <Text style={estilo.styles.nombre}>{Salmos.salmo90.nombre}</Text>
      <Text style={estilo.styles.titulo}>{Salmos.salmo90.titulo}</Text>
      <Image style={estilo.styles.imageSalmDom} source={require('../imagescompletorio/salmodomingo.png')} />

      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>Ant. </Text>{Salmos.salmo90.antifona}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>TP. </Text>{Salmos.salmo90.TP}</Text>
      <Text></Text>

      <Text style={estilo.styles.cuerpo}>{Salmos.salmo90.cuerpo}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>Ant. </Text>{Salmos.salmo90.antifona}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>TP. </Text>{Salmos.salmo90.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}
