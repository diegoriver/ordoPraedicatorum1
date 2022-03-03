import 'react-native-gesture-handler';

import React from 'react';
import { Text, ScrollView, View, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Collapse,CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';


import Cantos from './cantos/textos/listaCantos.json';

import {styles} from "../../componentes/estilos";


const CreditosP = ({navigation}) => {
  
  return (

  <ImageBackground source={require('../../assets/Marca_agua_escudo_OP.jpg')} style={styles.imagebg}>
  <>
 

    <ScrollView>
     
    <View style={ styles.container}>
      <Text style={styles.titulodia}>CREDITOS</Text>
    </View>
      <View style={ styles.containerList2}>
        <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>Desarrollador</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.cuerpo}>Fray Diego Rivera O.P</Text>
            <Text style={styles.antifona}>Provincia San Luís Bertrán de Colombia</Text>
          </CollapseBody>
        </Collapse>

        <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>Diseñador UI - UX</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.cuerpo}>Fray Oscar García O.P</Text>
            <Text style={styles.antifona}>Provincia San Luís Bertrán de Colombia</Text>
          </CollapseBody>
        </Collapse>

     <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>Colaboradores</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.cuerpo}>Fray Yamir Orduña O.P.</Text>
            <Text style={styles.antifona}>Provincia San Luís Bertrán de Colombia</Text>
          </CollapseBody>
      </Collapse>

      </View>
    </ScrollView>
  </>
  </ImageBackground>  
  );
};



const Stacko = createStackNavigator();

export default function CreditosPage() {
  return (
  <Stacko.Navigator headerMode= "none" >
    <Stacko.Screen name="Creditos" component={CreditosP} />
  </Stacko.Navigator>
 

    );
}

