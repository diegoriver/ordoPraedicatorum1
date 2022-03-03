import * as React from 'react';
import {ScrollView, View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Collapse,CollapseHeader, CollapseBody, AccordionList}from 'accordion-collapse-react-native';


import {styles} from '../../../componentes/estilos';

import DiaLaudesVisperasp from './fiestasSolemnidades/diaLaudesVisperas';

import * as contenido from '../componentes/contenidoLaudesVisperas';



const Stacko = createStackNavigator();


function ListScreen({ navigation }) {

  return (

    <ImageBackground source={require('../../../assets/Marca_agua_escudo_OP.jpg')} style={styles.imagebg}>
    <>
      <ScrollView style={styles.containerList}>
  
  
        <Text style={styles.titulodiaTab}>FIESTAS Y SOLEMNIDADES</Text>
        <Text> </Text>
        <View style={styles.contenidoList}>

          <Text>{" "}</Text>  

          <Collapse>
            <CollapseHeader>        
                <View style={styles.button1} >
                  <Text style={styles.buttonText2} >Traslación de Nuestro Padre</Text>
                  <Text style={styles.enlace}>24 de Mayo</Text>
                </View>          
            </CollapseHeader>
            <CollapseBody>
              <Text>{" "}</Text>
              <Text style={styles.enlace} onPress={() => navigation.navigate('TraslacionLaudes')}>Laudes</Text>
              <Text>{" "}</Text>
              <Text style={styles.enlace} onPress={() => navigation.navigate('TraslacionVisperas')}>Visperas</Text>
              <Text>{" "}</Text>
            </CollapseBody>
          </Collapse>
          <Text>{" "}</Text>  

          <Collapse>
            <CollapseHeader>        
                <View style={styles.button1} >
                  <Text style={styles.buttonText2} >Solemnidad de Nuestro Padre</Text>
                  <Text style={styles.enlace}>8 de Agosto</Text>
                </View>          
            </CollapseHeader>
            <CollapseBody>
              <Text>{" "}</Text>
              <Text style={styles.enlace} onPress={() => navigation.navigate('SolemnidadVisperas1')}>Visperas I</Text>
              <Text>{" "}</Text>
              <Text style={styles.enlace} onPress={() => navigation.navigate('SolemnidadLaudes')}>Laudes</Text>
              <Text>{" "}</Text>
              <Text style={styles.enlace} onPress={() => navigation.navigate('SolemnidadVisperas2')}>Visperas</Text>
              <Text>{" "}</Text>
            </CollapseBody>
          </Collapse>
          <Text>{" "}</Text>  

          <Text>{" "}</Text>
          <Text>{" "}</Text>
          <Text>{" "}</Text>
 
        </View>
  
      </ScrollView>
    </>
    </ImageBackground>  

  );
}


function TraslacionLaudes ({ navigation }) { return (<DiaLaudesVisperasp  partesp={contenido.traslacionLaudes.partes} />);}
function TraslacionVisperas ({ navigation }) { return (<DiaLaudesVisperasp  partesp={contenido.traslacionVisperas.partes} />);}
function SolemnidadVisperas1 ({ navigation }) { return (<DiaLaudesVisperasp  partesp={contenido.solemnidadVisperas1.partes} />);}
function SolemnidadLaudes ({ navigation }) { return (<DiaLaudesVisperasp  partesp={contenido.solemnidadLaudes.partes} />);}
function SolemnidadVisperas2 ({ navigation }) { return (<DiaLaudesVisperasp  partesp={contenido.solemnidadVisperas2.partes} />);}


export default function FiestasSolemnidades() {
  return (
  <Stacko.Navigator headerMode= "none" >
    <Stacko.Screen name="Fiestas y solemnidades" component={ListScreen} />
    <Stacko.Screen name="TraslacionLaudes" component={TraslacionLaudes} />
    <Stacko.Screen name="TraslacionVisperas" component={TraslacionVisperas} />
    <Stacko.Screen name="SolemnidadVisperas1" component={SolemnidadVisperas1} />
    <Stacko.Screen name="SolemnidadLaudes" component={SolemnidadLaudes} />
    <Stacko.Screen name="SolemnidadVisperas2" component={SolemnidadVisperas2} />

  </Stacko.Navigator>
 

    );
}