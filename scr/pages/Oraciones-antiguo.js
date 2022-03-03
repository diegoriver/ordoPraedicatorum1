import 'react-native-gesture-handler';

import React from 'react';

import { Text, ScrollView, View, Button, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import * as estilo from '../../componentes/estilos';


import Angelusp from './oraciones/angelus';
import Angeluslatinp from './oraciones/angeluslatin';
import Reinap from './oraciones/reina';
import Reginap from './oraciones/regina';
import Bienaventuradap from './oraciones/bienaventurada';
import Espiritudivinop from './oraciones/espiritudivino';
import Espiritusantop from './oraciones/espiritusanto';
import Sacrump from './oraciones/sacrum';
import Sagradop from './oraciones/sagrado';
import Santotomasp from './oraciones/santotomas';
import Virgenp from './oraciones/virgen';
import Estudiop from './oraciones/estudio';
import Pangep from './oraciones/pange';
import Eucaristiap from './oraciones/eucaristia';


function ListScreen({ navigation }) {

  let colorbtn1= estilo.colorbtn1.color;
  let colorbtn2= estilo.colorbtn2.color;

  return (
  <ImageBackground source={require('../../assets/Marca_agua_escudo_OP.jpg')} style={estilo.styles.imagebg}>
  <>
    <ScrollView style={estilo.styles.containerList}>

      <Text style={estilo.styles.titulodiaTab}>ORACIONES DEL COMPLETORIO DOMINICANO</Text>
      <Text> </Text>
      <View style={estilo.styles.contenidoList}>
            
            <Button title="Novena a Nuestro Padre Santo Domingo"  onPress={() => navigation.navigate('')} />
            <Text> </Text>

            <Button title="ORACIÓN PARA ANTES DEL ESTUDIO (Santo Tomás de Aquino)" color={colorbtn2} onPress={() => navigation.navigate('Estudio')} />
            <Text> </Text>  
            <Button title="VEN, ESPÍRITU SANTO" color ={colorbtn1} onPress={() => navigation.navigate('Ven, Espíritu Santo')} />
            <Text> </Text>
            <Button title="VEN, ESPÍRITU DIVINO" color={colorbtn2}  onPress={() => navigation.navigate('Ven, Espíritu Divino')}  />
            <Text> </Text>
            <Button title="ORACIÓN DE SANTO TOMÁS DE AQUINO PARA ORDENAR SABIAMENTE LA VIDA" color={colorbtn1} onPress={() => navigation.navigate('Oración de Santo Tomás')} />
            <Text> </Text>
            <Button title="ANGELUS" color={colorbtn2} onPress={() => navigation.navigate('Angelus')}/>
            <Text> </Text>
            <Button title="ANGELUS LATIN" color={colorbtn1} onPress={() => navigation.navigate('Angeluslatin')} />
            <Text> </Text>
            <Button title="REINA DEL CIELO " color={colorbtn2} onPress={() => navigation.navigate('Reina del Cielo')} />
            <Text> </Text>
            <Button title="REGINA COELI" color={colorbtn1} onPress={() => navigation.navigate('Regina Coele')} />
            <Text> </Text>
            <Button title="ORACIÓN A LA VIRGEN MARÍA" color={colorbtn2} onPress={() => navigation.navigate('Oración a la Virgen María')} />
            <Text> </Text>
            <Button title="ORACIÓN A LA BIENAVENTURADA VIRGEN MARÍA (Santo Tomás de Aquino)" color={colorbtn1} onPress={() => navigation.navigate('Oración a la Bienaventurada Virgen María')} />
            <Text> </Text>
            <Button title="Pange Lingua" color={colorbtn2}  onPress={() => navigation.navigate('Pange Lingua')} />
            <Text> </Text>

            <Button title="Oración para antes y después de la Eucaristía (Santo Tomás de Aquino)" color={colorbtn1} onPress={() => navigation.navigate('Oración para la Eucaristia')} />
            <Text> </Text> 

            <Button title="OH SAGRADO BANQUETE" color={colorbtn2} onPress={() => navigation.navigate('Oh Sagrado Banquete')}  />
            <Text> </Text>
            <Button title="O SACRUM CONVIVIUM" color={colorbtn1} onPress={() => navigation.navigate('O Sacrum convivium')} />
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>

      </View>

    </ScrollView>
  </>
  </ImageBackground>  
    
  );
}

function Angelus({ navigation }) { return (<Angelusp />);}
function Angeluslatin({ navigation }) { return (<Angeluslatinp />);}
function Reina({ navigation }) { return (<Reinap />);}
function Regina({ navigation }) { return (<Reginap />);}
function Bienaventurada({ navigation }) { return (<Bienaventuradap />);}
function Espiritudivino({ navigation }) { return (<Espiritudivinop />);}
function Espiritusanto({ navigation }) { return (<Espiritusantop />);}
function Sacrum({ navigation }) { return (<Sacrump />);}
function Sagrado({ navigation }) { return (<Sagradop />);}
function Santotomas({ navigation }) { return (<Santotomasp />);}
function Virgen({ navigation }) { return (<Virgenp />);}
function Estudio({ navigation }) { return (<Estudiop />);}
function Pange({ navigation }) { return (<Pangep />);}
function Eucaristia({ navigation }) { return (<Eucaristiap />);}


const Stacko = createStackNavigator();

export default function oraciones() {
  return (
  <Stacko.Navigator headerMode= "none" >
    <Stacko.Screen name="Oraciones y textos espírituales" component={ListScreen} />
    <Stacko.Screen name="Angelus" component={Angelus} />
    <Stacko.Screen name="Angeluslatin" component={Angeluslatin} />
    <Stacko.Screen name="Reina del Cielo" component={Reina} />
    <Stacko.Screen name="Regina Coele" component={Regina} />

    <Stacko.Screen name="Oración a la Bienaventurada Virgen María" component={Bienaventurada} />
    <Stacko.Screen name="Ven, Espíritu Divino" component={Espiritudivino} />
    <Stacko.Screen name="Ven, Espíritu Santo" component={Espiritusanto} />
    <Stacko.Screen name="O Sacrum convivium" component={Sacrum} />
    <Stacko.Screen name="Oh Sagrado Banquete" component={Sagrado} />
    <Stacko.Screen name="Oración de Santo Tomás" component={Santotomas} />
    <Stacko.Screen name="Oración a la Virgen María" component={Virgen} />
    <Stacko.Screen name="Estudio" component={Estudio} />
    <Stacko.Screen name="Pange Lingua" component={Pange} />
    <Stacko.Screen name="Oración para la Eucaristia" component={Eucaristia} />
  </Stacko.Navigator>
 

    );
}
