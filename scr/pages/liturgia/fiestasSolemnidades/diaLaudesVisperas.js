import * as React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';

// se importan los styles desde js
import {styles} from '../../../../componentes/estilos';

//import  de los textos JSON


export default function LaudesVisperasScreen(props) {

    // / AQUI SE PONEN LOS PROPS QUE VIENEN DE fiestasSolemnidades///////////////
  
    const partes = props.partesp;
    /////////////////////////////////////////////////////////////
  
    return (
    <ImageBackground source={require('../../../../assets/Marca_agua_escudo_OP.jpg')} style={styles.imagebg}>
  
      <ScrollView style={styles.container}>
  
  
        {/* <!-------------------- TITULOS INICIALES -----------------------> */}
        <View>
        <Text style={styles.titulodia}>{partes[0]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>{partes[1]}</Text>
        <Text>{" "}</Text>
        </View>
  
        {/* <!-------------------- HIMNO  -----------------------> */}
        <View>
        <Text style={styles.titulo}>{partes[2]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.titulo}>{partes[3]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>{partes[4]}</Text>
        <Text>{" "}</Text>
        <Text>{" "}</Text>
        </View>

        {/* <!-------------------- SALMOS -----------------------> */}
        <View>
        <Text style={styles.titulo}>{partes[5]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>{partes[6]}</Text>{partes[7]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.cita}>{partes[8]}</Text>
        <Text style={styles.cita}>{partes[9]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>{partes[10]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>{partes[11]}</Text>{partes[12]}</Text>
        <Text>{" "}</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>{partes[13]}</Text>{partes[14]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.cita}>{partes[15]}</Text>
        <Text style={styles.cita}>{partes[16]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>{partes[17]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>{partes[18]}</Text>{partes[19]}</Text>
        <Text>{" "}</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>{partes[20]}</Text>{partes[21]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.cita}>{partes[22]}</Text>
        <Text style={styles.cita}>{partes[23]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>{partes[24]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>{partes[25]}</Text>{partes[26]}</Text>
        <Text>{" "}</Text>
        </View>

        {/* <!-------------------- LECTURA BREVE -----------------------> */}
        <View>
        <Text style={styles.subtitulodia}>{partes[27]}</Text>
        <Text style={styles.cita}>{partes[28]}</Text>
        <Text>{" "}</Text>   
        <Text style={styles.cuerpo}>{partes[29]}</Text>
        <Text>{" "}</Text>   
        </View>

        {/* <!-------------------- RESPONSORIO BREVE -----------------------> */}
        <View>
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>{partes[30]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>V. </Text>{partes[31]}</Text>
        <Text style={styles.responsorio}><Text style={{color:'red'}}>R. </Text>{partes[32]}</Text>
        <Text>{" "}</Text>   
        <Text style={styles.antifona}><Text style={{color:'red'}}>V. </Text>{partes[33]}</Text>
        <Text style={styles.responsorio}><Text style={{color:'red'}}>R. </Text>{partes[34]}</Text>
        <Text>{" "}</Text>        
        <Text style={styles.antifona}><Text style={{color:'red'}}>V. </Text>{partes[35]}</Text>
        <Text style={styles.responsorio}><Text style={{color:'red'}}>R. </Text>{partes[36]}</Text>
        <Text>{" "}</Text>      
        </View>

        {/* <!-------------------- canticoEvangelico: BENEDICTUS - MAGNIFICAT -----------------------> */}
        <View>
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>{partes[37]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>Ant. </Text>{partes[38]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.cita}>{partes[39]}</Text>
        <Text style={styles.cita}>{partes[40]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>{partes[41]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.antifona}><Text style={{color:'red'}}>Ant. </Text>{partes[42]}</Text>      
        <Text>{" "}</Text>
        </View>


        {/* <!-------------------- PRECES y ORACIÓN FINAL -----------------------> */}
        <View>
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>{partes[43]}</Text>
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>{partes[44]}</Text>     
        <Text>{" "}</Text>
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>{partes[45]}</Text>      
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>{partes[46]}</Text>      
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>{partes[47]}</Text>      
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>{partes[48]}</Text>      
        <Text>{" "}</Text>        
        </View>


        {/* <!-------------------- DESPUES DE ORACIÓN FINAL no aplica en todos lsoc asos-----------------------> */}
        <View>
        <Text>{" "}</Text>
        <Text style={styles.subtitulodia}>{partes[49]}</Text>      
        <Text>{" "}</Text>
        <Text style={styles.cuerpo}>{partes[50]}</Text>      
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
  
  
  
  