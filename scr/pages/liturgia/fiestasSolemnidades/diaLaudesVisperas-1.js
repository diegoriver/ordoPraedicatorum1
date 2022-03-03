import * as React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';

// se importan los styles desde js
import {styles} from '../../../../../componentes/estilos';

//import  de los textos JSON


export default function LaudesVisperasScreen(props) {

    // / AQUI SE PONEN LOS PROPS QUE VIENEN DE DRAWER///////////////
    // mientras tanto se ponen las variables aqui/////
  
    const partescompl = props.partes;

    /////////////////////////////////////////////////////////////
  
    return (
    <ImageBackground source={require('../../../../../assets/Marca_agua_escudo_OP.jpg')} style={styles.imagebg}>
  
      <ScrollView style={styles.container}>
  
  
        {/* <!-------------------- TITULOS INICIALES -----------------------> */}
        <View>
        <Text style={styles.titulodia}>tituloCelebraciones</Text>
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>laudes-Visperas</Text>
        <Text>{" "}</Text>
        </View>
  
        {/* <!-------------------- HIMNO  -----------------------> */}
        <View>
        <Text style={styles.titulo}>himno</Text>
        <Text>{" "}</Text>
        <Text style={styles.titulo}>himnoTitulo</Text>
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>himnoCuerpo</Text>
        <Text>{" "}</Text>
        <Text>{" "}</Text>
        </View>

        {/* <!-------------------- SALMOS -----------------------> */}
        <View>
        <Text style={styles.titulo}>salmodia</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>Antifona1 </Text>cuerpoAntifona1</Text>
        <Text>{" "}</Text>
        <Text style={styles.cita}>numeroSalmo1</Text>
        <Text style={styles.cita}>tituloSalmo1</Text>
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>cuerpoSalmo1</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>Antifona1</Text>cuerpoAntifona1</Text>
        <Text>{" "}</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>Antifona2 </Text>cuerpoAntifona2</Text>
        <Text>{" "}</Text>
        <Text style={styles.cita}>nombreSalmo2</Text>
        <Text style={styles.cita}>tituloSalmo2</Text>
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>cuerpoSalmo2</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>Antifona2</Text>cuerpoAntifona2</Text>
        <Text>{" "}</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>Antifona3</Text>cuerpoAntifona3</Text>
        <Text>{" "}</Text>
        <Text style={styles.cita}>nombreSalmo3</Text>
        <Text style={styles.cita}>tituloSalmo3</Text>
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>cuerpoSalmo3</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>Antifona3</Text>cuerpoAntifona3</Text>
        <Text>{" "}</Text>
        </View>

        {/* <!-------------------- LECTURA BREVE -----------------------> */}
        <View>
        <Text style={styles.subtitulodia}>lecturaBreve</Text>
        <Text style={styles.titulo2}>tituloLecturaBreve</Text>
        <Text>{" "}</Text>   
        <Text style={styles.titulo2}>cuerpoLecturaBreve</Text>
        <Text>{" "}</Text>   
        </View>

        {/* <!-------------------- RESPONSORIO BREVE -----------------------> */}
        <View>
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>responsorioBreve</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>V. </Text>versiculoResponsorioBreve1</Text>
        <Text style={styles.responsorio}><Text style={{color:'red'}}>R. </Text>respuestaResponsorioBreve1</Text>
        <Text>{" "}</Text>   
        <Text style={styles.antifona}><Text style={{color:'red'}}>V. </Text>versiculoResponsorioBreve2</Text>
        <Text style={styles.responsorio}><Text style={{color:'red'}}>R. </Text>respuestaResponsorioBreve2</Text>
        <Text>{" "}</Text>        
        <Text style={styles.antifona}><Text style={{color:'red'}}>V. </Text>versiculoResponsorioBreve3</Text>
        <Text style={styles.responsorio}><Text style={{color:'red'}}>R. </Text>respuestaResponsorioBreve3</Text>
        <Text>{" "}</Text>      
        </View>

        {/* <!-------------------- canticoEvangelico: BENEDICTUS - MAGNIFICAT -----------------------> */}
        <View>
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>canticoEvangelico</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>Ant. </Text>cuerpoAntifonaCanticoEvangelico</Text>
        <Text style={styles.subtitulodia}>tituloCanticoEvangelico</Text>
        <Text style={styles.titulo2}>subtituloCanticoEvangelico</Text>
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>cuerpoCanticoEvangelico</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>Ant. </Text>cuerpoAntifonaCanticoEvangelico</Text>      
        <Text>{" "}</Text>
        </View>


        {/* <!-------------------- PRECES y ORACIÓN FINAL -----------------------> */}
        <View>
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>preces</Text>
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>cuerpoPreces</Text>     
        <Text>{" "}</Text>
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>oracion</Text>      
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>oracionCuerpo</Text>      
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>bendicionFinal</Text>      
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>cuerpoBendicionFinal</Text>      
        <Text>{" "}</Text>        
        </View>


        {/* <!-------------------- DESPUES DE ORACIÓN FINAL no aplica en todos lsoc asos-----------------------> */}
        <View>
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>ultimaOracion</Text>      
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>cuerpoUltimaOracion</Text>      
        <Text>{" "}</Text>        
        </View>

        {/* <!-- ----------------------- --> */}
        <View>
        <Text>{" "}</Text>
        </View>
        

      </ScrollView>
    </ImageBackground>
    );
  }
  
  
  
  