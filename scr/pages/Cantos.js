import 'react-native-gesture-handler';

import React from 'react';
import { Text, ScrollView, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Collapse,CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';


import Cantos from './cantos/textos/listaCantos.json';

import {styles} from "../../componentes/estilos";


const CantoralP = ({navigation}) => {
  
  return (

  <ImageBackground source={require('../../assets/Marca_agua_escudo_OP.jpg')} style={styles.imagebg}>
  <>
 

    <ScrollView>
     
    <View style={ styles.container}>
      <Text style={styles.titulodia}>CANTORAL DOMINICANO</Text>
    </View>
      <View style={ styles.containerList2}>
        <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>{Cantos.canto1.nombre}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.cuerpo}>{Cantos.canto1.estrofa1}</Text>
            <Text style={styles.antifona}>{Cantos.canto1.coro1}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto1.estrofa2}</Text>
            <Text style={styles.antifona}>{Cantos.canto1.coro2}</Text>
          </CollapseBody>
        </Collapse>

        <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>{Cantos.canto2.nombre}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.cuerpo}>{Cantos.canto2.estrofa1}</Text>
            <Text style={styles.antifona}>{Cantos.canto2.coro1}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto2.estrofa2}</Text>
          </CollapseBody>
        </Collapse>

     <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>{Cantos.canto3.nombre}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.cuerpo}>{Cantos.canto3.estrofa1}</Text>
            <Text style={styles.antifona}>{Cantos.canto3.coro1}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto3.estrofa2}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto3.estrofa3}</Text>
          </CollapseBody>
        </Collapse>

     <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>{Cantos.canto4.nombre}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.cuerpo}>{Cantos.canto4.estrofa1}</Text>
            <Text style={styles.antifona}>{Cantos.canto4.coro1}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto4.estrofa2}</Text>
            <Text style={styles.antifona}>{Cantos.canto4.coro2}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto4.estrofa3}</Text>
          </CollapseBody>
        </Collapse>

     <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>{Cantos.canto5.nombre}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.cuerpo}>{Cantos.canto5.estrofa1}</Text>
            <Text style={styles.antifona}>{Cantos.canto5.coro1}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto5.estrofa2}</Text>
            <Text style={styles.antifona}>{Cantos.canto5.coro2}</Text>
          </CollapseBody>
        </Collapse>

     <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>{Cantos.canto6.nombre}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.cuerpo}>{Cantos.canto6.estrofa1}</Text>
            <Text style={styles.antifona}>{Cantos.canto6.coro1}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto6.estrofa2}</Text>
            <Text style={styles.antifona}>{Cantos.canto6.coro2}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto6.estrofa3}</Text>
            <Text style={styles.antifona}>{Cantos.canto6.coro3}</Text>
          </CollapseBody>
        </Collapse>

     <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>{Cantos.canto7.nombre}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.cuerpo}>{Cantos.canto7.estrofa1}</Text>
            <Text style={styles.antifona}>{Cantos.canto7.coro1}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto7.estrofa2}</Text>
            <Text style={styles.antifona}>{Cantos.canto7.coro2}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto7.estrofa3}</Text>
            <Text style={styles.antifona}>{Cantos.canto7.coro3}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto7.estrofa4}</Text>
            <Text style={styles.antifona}>{Cantos.canto7.coro4}</Text>
          </CollapseBody>
        </Collapse>

     <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>{Cantos.canto8.nombre}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.cuerpo}>{Cantos.canto8.estrofa1}</Text>
            <Text style={styles.antifona}>{Cantos.canto8.coro1}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto8.estrofa2}</Text>
            <Text style={styles.antifona}>{Cantos.canto8.coro2}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto8.estrofa3}</Text>
          </CollapseBody>
        </Collapse>

     <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>{Cantos.canto9.nombre}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.cuerpo}>{Cantos.canto9.estrofa1}</Text>
            <Text style={styles.antifona}>{Cantos.canto9.coro1}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto9.estrofa2}</Text>
            <Text style={styles.antifona}>{Cantos.canto9.coro2}</Text>
          </CollapseBody>
        </Collapse>

     <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>{Cantos.canto10.nombre}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.antifona}>{Cantos.canto10.coro1}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto10.estrofa1}</Text>
            <Text style={styles.antifona}>{Cantos.canto10.coro2}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto10.estrofa2}</Text>
            <Text style={styles.antifona}>{Cantos.canto10.coro3}</Text>
          </CollapseBody>
      </Collapse>
        
     <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>{Cantos.canto11.nombre}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.antifona}>{Cantos.canto11.coro1}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto11.estrofa1}</Text>
          </CollapseBody>
      </Collapse>
        
      </View>
    </ScrollView>
  </>
  </ImageBackground>  
  );
};



const Stacko = createStackNavigator();

export default function CantoralPage() {
  return (
  <Stacko.Navigator headerMode= "none" >
    <Stacko.Screen name="Cantoral" component={CantoralP} />
  </Stacko.Navigator>
 

    );
}

