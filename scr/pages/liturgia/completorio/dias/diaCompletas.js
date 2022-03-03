
import * as React from 'react';
import { View, Text, ScrollView, ImageBackground, Image } from 'react-native';
import { Collapse,CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';


// se importan los estilo.styles desde estilo.js
import * as estilo from '../../../../../componentes/estilos';


//import  de los textos JSON
import  Inicial from '../textos/invocacioninicial.json';
import Examen from '../textos/examenconciencia.json';
import HimnosIniciales from '../textos/himnos.json';
import ResponsorioBreve from '../textos/responsorios.json';
import Cantico from '../textos/canticoevangelico.json';


import Lectura from '../textos/lecturas.json';
import Final from '../textos/oracionfinal.json';
import Salve from '../textos/salve.json';
import StoDomingo from '../textos/domingo.json';
import SalmoDifuntos from '../textos/salmosdifuntos.json';
import Difuntos from '../textos/oraciondifuntos.json';


// se importa deacuerdo al día //////////////////////////////////////

import Salmodomingo from './partes/salmosdias/salmodomingo';
import Salmosabado from './partes/salmosdias/salmosabado';
import Salmoviernes from './partes/salmosdias/salmoviernes';
import Salmojueves from './partes/salmosdias/salmojueves';
import Salmomiercoles from './partes/salmosdias/salmomiercoles';
import Salmomartes from './partes/salmosdias/salmomartes';
import Salmolunes from './partes/salmosdias/salmolunes';

/////////////////////////////////////////////////////////////////



export default function CompletasScreen(props) {

  // / AQUI SE PONEN LOS PROPS QUE VIENEN DE DRAWER///////////////
  // mientras tanto se ponen las variables aqui/////

  const diatitulo = props.titulo;

  const partescompl = props.partes;
   


  // let a = 3;
  let a = props.diasemana;
  let Salmodia;

  switch (a) {
  case 'domingo':
    Salmodia = <Salmodomingo />;
    break;
  case 'sabado':
    Salmodia = <Salmosabado />;
    break;
  case 'viernes':
    Salmodia = <Salmoviernes />;
    break;
  case 'jueves':
    Salmodia = <Salmojueves />;
    break;
  case 'miercoles':
    Salmodia = <Salmomiercoles />;
    break;
  case 'martes':
    Salmodia = <Salmomartes />;
    break;
  default:
    Salmodia = <Salmolunes />;
}
  /////////////////////////////////////////////////////////////

  return (
  <ImageBackground source={require('../../../../../assets/Marca_agua_escudo_OP.jpg')} style={estilo.styles.imagebg}>

    <ScrollView style={estilo.styles.container}>
      <View>


      {/* <!-- ----------------------- --> */}
      <Text style={estilo.styles.titulodia}>{diatitulo}</Text>
      {/* <!-- ----------------------- --> */}
      <Text>{" "}</Text>
      

      {/* <!-------------------- INVOCACIÓN INICIAL -----------------------> */}
     
      <Text style={estilo.styles.nombre}>{Inicial.nombre}</Text>
      <Text>{" "}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Inicial.v}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Inicial.r}</Text>
      <Text>{" "}</Text>
      <Text style={estilo.styles.responsorio}>{Inicial.gloria}</Text>
      <Text>{" "}</Text>

      {/* <!-------------------- EXAMEN DE CONCIENCIA -----------------------> */}

      <Text style={estilo.styles.nombre}>EXAMEN DE CONCIENCIA</Text>
 
    <View style={estilo.styles.container}>
      {/* <!--Formulario 1 --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text  style={estilo.styles.antifona}>Formulario 1</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>{" "}</Text>
          <Text style={estilo.styles.cuerpo}>{Examen.oracionInicial}</Text>
          <Text style={estilo.styles.cuerpo}>{Examen.examen1.oracion}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Examen.examen1.v1}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Examen.examen1.r1}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

          {/* <!--Formulario 2 --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>Formulario 2</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>{" "}</Text>
          <Text style={estilo.styles.cuerpo}>{Examen.oracionInicial}</Text>
          <Text style={estilo.styles.cuerpo}>{Examen.examen2.oracion}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Examen.examen2.v1}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Examen.examen2.r1}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

           {/* <!--Formulario 3 --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>Formulario 3</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>{" "}</Text>
          <Text style={estilo.styles.cuerpo}>{Examen.oracionInicial}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Examen.examen3.v1}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Examen.examen3.r1}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Examen.examen3.v2}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Examen.examen3.r2}</Text>
          <Text style={estilo.styles.cuerpo}>{Examen.examen3.oracion}</Text>
          <Text style={estilo.styles.cuerpo}>{Examen.examen3.roracion}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!--Formulario 4 --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>Formulario 4</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>{" "}</Text>
          <Text style={estilo.styles.cuerpo}>{Examen.oracionInicial}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Examen.examen4.v1}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Examen.examen4.r1}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Examen.examen4.v2}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Examen.examen4.r2}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Examen.examen4.v3}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Examen.examen4.r3}</Text>
          <Text style={estilo.styles.cuerpo}>{Examen.examen4.oracion}</Text>
          <Text style={estilo.styles.cuerpo}>{Examen.examen4.roracion}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!--Formulario 5 --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>Formulario 5</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
           <Text>{" "}</Text>
           <Text style={estilo.styles.cuerpo}>{Examen.oracionInicial}</Text>
           <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Examen.examen5.v1}</Text>
           <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Examen.examen5.r1}</Text>
           <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Examen.examen5.v2}</Text>
           <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Examen.examen5.r2}</Text>
           <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Examen.examen5.v3}</Text>
           <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Examen.examen5.r3}</Text>
           <Text style={estilo.styles.cuerpo}>{Examen.examen5.oracion}</Text>
           <Text style={estilo.styles.cuerpo}>{Examen.examen5.roracion}</Text>
           <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!--Formulario 6 --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>Formulario 6</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>{" "}</Text>
          <Text style={estilo.styles.cuerpo}>{Examen.oracionInicial}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Examen.examen6.v1}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Examen.examen6.r1}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Examen.examen6.v2}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Examen.examen6.r2}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Examen.examen6.v3}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Examen.examen6.r3}</Text>
          <Text style={estilo.styles.cuerpo}>{Examen.examen6.oracion}</Text>
          <Text style={estilo.styles.cuerpo}>{Examen.examen6.roracion}</Text>
          <Text>{" "}</Text>          
        </CollapseBody>
      </Collapse>
    </View>

    </View>


      {/* <!------------------------------ HIMNOS ------------------------------> */}

      <Text>{" "}</Text>
      <Text style={estilo.styles.nombre}>HIMNOS</Text>      
      
      <View>
      {/* <!--QUE VES EN LA NOCHE --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>{HimnosIniciales.himno1.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>{" "}</Text>
          <Text style={estilo.styles.cuerpo}>{HimnosIniciales.himno1.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!--SOL DE MI SER --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>{HimnosIniciales.himno2.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageHim2} source={require('./partes/imagescompletorio/soldemiser.png')} />
          <Text style={estilo.styles.cuerpo}>{HimnosIniciales.himno2.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!--CERCA DE TI, SEÑOR --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>{HimnosIniciales.himno3.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageHim3} source={require('./partes/imagescompletorio/cercadeti.png')} /> 
          <Text style={estilo.styles.cuerpo}>{HimnosIniciales.himno3.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- DÍA Y NOCHE --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>{HimnosIniciales.himno4.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>{" "}</Text>
          <Image style={estilo.styles.imageHim4} source={require('./partes/imagescompletorio/diaynoche.png')} />
          <Text style={estilo.styles.cuerpo}>{HimnosIniciales.himno4.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- JUNTO A TI, SEÑOR --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>{HimnosIniciales.himno5.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageHim5} source={require('./partes/imagescompletorio/juntoatisenor.png')} />
          <Text style={estilo.styles.cuerpo}>{HimnosIniciales.himno5.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- QUÉDATE CON NOSOTROS --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>{HimnosIniciales.himno6.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageHim6} source={require('./partes/imagescompletorio/quedateconnosotros.png')} />
          <Text style={estilo.styles.cuerpo}>{HimnosIniciales.himno6.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- PORQUE ANOCHECE YA --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>{HimnosIniciales.himno7.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text style={estilo.styles.cuerpo}>{HimnosIniciales.himno7.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- BENDITO SILENCIO --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>{HimnosIniciales.himno8.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>{" "}</Text>
          <Text style={estilo.styles.cuerpo}>{HimnosIniciales.himno8.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- LA NOCHE --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>{HimnosIniciales.himno9.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>{" "}</Text>
          <Text style={estilo.styles.cuerpo}>{HimnosIniciales.himno9.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>
      </View>

  {/* <!---------------------------------- SALMOS -----------------------------> */}
      <View>
      <Text>{" "}</Text>
      <Text style={estilo.styles.nombre}>SALMOS</Text>

      {/* <!-- ----------------------- --> */}
      {/*<Salmodomingo />*/}
      {Salmodia}
      {/* <!-- ----------------------- --> */}   
      <Text>{" "}</Text>
      </View>
  {/* <!---------------------------------- LECTURAS -----------------------------> */}

      <View>
      <Text>{" "}</Text>
      {/* <!-- ----------------------- --> */}
      <Text style={estilo.styles.nombre}>{partescompl[0]}</Text>
      <Text style={estilo.styles.cuerpo}>{partescompl[1]}</Text>
      <Text style={estilo.styles.cita}>{partescompl[2]}</Text>
      {/* <!-- ----------------------- --> */}
      </View>


{/* <!---------------------------------- RESPONSORIOS -----------------------------> */}    
      <View>
      <Text>{" "}</Text>
      <Text>{" "}</Text>
      <Text style={estilo.styles.nombre}>RESPONSORIO BREVE</Text>
      <Text>{" "}</Text>
      </View>
      <View>
      {/* <!-- FERIAS --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>{ResponsorioBreve.responsorio1.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageResp1} source={require('./partes/imagescompletorio/responsorioferia.png')} />
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{ResponsorioBreve.responsorio1.v1}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{ResponsorioBreve.responsorio1.r1}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{ResponsorioBreve.responsorio1.v2}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{ResponsorioBreve.responsorio1.r2}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{ResponsorioBreve.responsorio1.v3}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{ResponsorioBreve.responsorio1.r3}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- SÁBADOS Y DOMINGOS --> */}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={estilo.styles.antifona}>{ResponsorioBreve.responsorio2.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageResp2} source={require('./partes/imagescompletorio/responsoriosabadoydomingo.png')} />
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{ResponsorioBreve.responsorio2.v1}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{ResponsorioBreve.responsorio2.r1}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{ResponsorioBreve.responsorio2.v2}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{ResponsorioBreve.responsorio2.r2}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{ResponsorioBreve.responsorio2.v3}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{ResponsorioBreve.responsorio2.r3}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- MEMORIAS Y FIESTAS --> */}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={estilo.styles.antifona}>{ResponsorioBreve.responsorio3.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageResp3} source={require('./partes/imagescompletorio/responsoriomemorias.png')} />
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{ResponsorioBreve.responsorio3.v1}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{ResponsorioBreve.responsorio3.r1}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{ResponsorioBreve.responsorio3.v2}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>
      

      {/* <!-- SOLEMNIDADES Y TIEMPO DE PASCUA --> */}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={estilo.styles.antifona}>{ResponsorioBreve.responsorio4.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageResp4} source={require('./partes/imagescompletorio/responsoriosolemnidades.png')} />
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{ResponsorioBreve.responsorio4.v1}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{ResponsorioBreve.responsorio4.r1}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{ResponsorioBreve.responsorio4.v2}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{ResponsorioBreve.responsorio4.r2}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{ResponsorioBreve.responsorio4.v3}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{ResponsorioBreve.responsorio4.r3}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>
      </View>


  {/* <!---------------------------------- CANTICOS -----------------------------> */}

      <View>
      <Text>{" "}</Text>
      <Text>{" "}</Text>
      <Text style={estilo.styles.nombre}>CANTICO EVANGÉLICO</Text>      
      <Text>{" "}</Text>
      </View>    

      <View>
      {/* <!-- FERIAS --> */}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={estilo.styles.antifona}>{Cantico.cantico1.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageCan1} source={require('./partes/imagescompletorio/canticoferia.png')} />
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>Ant. </Text>{Cantico.cantico1.antifona}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>TP. </Text>{Cantico.cantico1.TP}</Text>
          <Text style={estilo.styles.cuerpo}>{Cantico.cantico1.cuerpo}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>Ant. </Text>{Cantico.cantico1.antifona}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>TP. </Text>{Cantico.cantico1.TP}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- SÁBADOS Y DOMINGOS --> */}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={estilo.styles.antifona}>{Cantico.cantico2.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageCan2} source={require('./partes/imagescompletorio/canticosabadoydomingo.png')} />
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>Ant. </Text>{Cantico.cantico2.antifona}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>TP. </Text>{Cantico.cantico1.TP}</Text>
          <Text style={estilo.styles.cuerpo}>{Cantico.cantico2.cuerpo}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>Ant. </Text>{Cantico.cantico2.antifona}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>TP. </Text>{Cantico.cantico2.TP}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- MEMORIAS --> */}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={estilo.styles.antifona}>{Cantico.cantico3.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageCan3} source={require('./partes/imagescompletorio/canticomemoria.png')} />
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>Ant. </Text>{Cantico.cantico3.antifona}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>TP. </Text>{Cantico.cantico1.TP}</Text>
          <Text style={estilo.styles.cuerpo}>{Cantico.cantico3.cuerpo}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>Ant. </Text>{Cantico.cantico3.antifona}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>TP. </Text>{Cantico.cantico3.TP}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- FIESTAS, SOLEMNIDADES Y TIEMPO DE PASCUA --> */}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={estilo.styles.antifona}>{Cantico.cantico4.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageCan4} source={require('./partes/imagescompletorio/canticofiesta.png')} />
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>Ant. </Text>{Cantico.cantico4.antifona}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>TP. </Text>{Cantico.cantico1.TP}</Text>
          <Text style={estilo.styles.cuerpo}>{Cantico.cantico4.cuerpo}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>Ant. </Text>{Cantico.cantico4.antifona}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>TP. </Text>{Cantico.cantico4.TP}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>
      </View>


  {/* <!---------------------------------- ORACIÓN FINAL -----------------------------> */}
      <View>
      {/* <!-- ----------------------- --> */}
      <Text>{" "}</Text>
      <Text>{" "}</Text>
      <Text style={estilo.styles.nombre}>{partescompl[3]}</Text>
      <Text style={estilo.styles.titulo}>{partescompl[4]}</Text>
      <Text style={estilo.styles.cuerpo}>{partescompl[5]}</Text>
      {/* <!-- ----------------------- --> */}
      </View>

  {/* <!---------------------------------- BENDICIÓN FINAL -----------------------------> */}
      <View>
      <Text>{" "}</Text>
      <Text style={estilo.styles.nombre}>{Final.bendicionfinal.nombre}</Text>
      <Text style={estilo.styles.cuerpo}>{Final.bendicionfinal.cuerpo}</Text>
      </View>

  {/* <!---------------------------------- SALVE -----------------------------> */}
      <View>
      <Text>{" "}</Text>
      <Text>{" "}</Text>
      <Text style={estilo.styles.nombre}>SALVE</Text>      
      <Text>{" "}</Text>
      </View>

      {/* <!-- SALVE - forma larga --> */}
      <View>
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>SALVE - forma larga</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageSalve1} source={require('./partes/imagescompletorio/salvelarga1.png')} /> 
          <Text>{" "}</Text>
          <Image style={estilo.styles.imageSalve1} source={require('./partes/imagescompletorio/salvelarga2.png')} /> 
          <Text>{" "}</Text>
          <Text style={estilo.styles.cuerpo}>{Salve.salve.cuerpo}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Salve.v1}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Salve.r1}</Text>
          <Text style={estilo.styles.nombre}>{Salve.latin.nombre}</Text>
          <Text style={estilo.styles.cuerpo}>{Salve.latin.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- SALVE - forma breve --> */}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={estilo.styles.antifona}>SALVE - forma breve</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageSalve2} source={require('./partes/imagescompletorio/salvecorta.jpg')} />
          <Text style={estilo.styles.cuerpo}>{Salve.salve.cuerpo}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Salve.v2}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Salve.r2}</Text>
          <Text style={estilo.styles.nombre}>{Salve.latin.nombre}</Text>
          <Text style={estilo.styles.cuerpo}>{Salve.latin.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>
      </View>

      <View>
      {/* <!-- ----------------------- --> */}
      <Text>{" "}</Text>
      <Text style={estilo.styles.nombre}>{partescompl[6]}</Text>
      <Text>{" "}</Text>
      <Text style={estilo.styles.cuerpo}>{partescompl[7]}</Text>
      {/* <!-- ----------------------- --> */}
      </View>


    {/* <!---------------------------------- CANTO A SANTO DOMINGO -----------------------------> */}
      <View>
      <Text>{" "}</Text>
      <Text>{" "}</Text>
      <Text style={estilo.styles.nombre}>CANTO A SANTO DOMINGO</Text>      
      <Text>{" "}</Text>
      </View>

      <View>
      {/* <!-- O SPEM MIRAM - forma larga --> */}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={estilo.styles.antifona}>O SPEM MIRAM - forma larga</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageStodom1a} source={require('./partes/imagescompletorio/ospem1.png')} />
          <Image style={estilo.styles.imageStodom1b} source={require('./partes/imagescompletorio/ospem2.png')} />
          <Text style={estilo.styles.cuerpo}>{StoDomingo.ospem.cuerpo}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{StoDomingo.ospem.v}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{StoDomingo.ospem.r}</Text>
          <Text style={estilo.styles.nombre}>{StoDomingo.latin.nombre}</Text>
          <Text style={estilo.styles.cuerpo}>{StoDomingo.latin.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- O SPEM MIRAM - forma breve --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>O SPEM MIRAM - forma breve</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageStodom2} source={require('./partes/imagescompletorio/ospemcorto.png')} />
          <Text style={estilo.styles.cuerpo}>{StoDomingo.ospem.cuerpo}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{StoDomingo.ospem.v}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{StoDomingo.ospem.r}</Text>
          <Text style={estilo.styles.nombre}>{StoDomingo.latin.nombre}</Text>
          <Text style={estilo.styles.cuerpo}>{StoDomingo.latin.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- OH ESPERANZA --> */}
      <Collapse>
        <CollapseHeader>
          <View>
          <Text style={estilo.styles.antifona}>{StoDomingo.ohesperanza.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageStodom3} source={require('./partes/imagescompletorio/ohesperanza1.png')} />
          <Text>{" "}</Text>
          <Image style={estilo.styles.imageStodom3} source={require('./partes/imagescompletorio/ohesperanza2.png')} />
          <Text style={estilo.styles.cuerpo}>{StoDomingo.ohesperanza.cuerpo}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{StoDomingo.ohesperanza.v}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{StoDomingo.ohesperanza.r}</Text>
          <Text style={estilo.styles.nombre}>{StoDomingo.latin.nombre}</Text>
          <Text style={estilo.styles.cuerpo}>{StoDomingo.latin.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- OH LUMEN --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>{StoDomingo.ohlumen.nombre}</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageStodom4} source={require('./partes/imagescompletorio/ohlumen.png')} />
          <Text style={estilo.styles.cuerpo}>{StoDomingo.ohlumen.cuerpo}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{StoDomingo.ohlumen.v}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{StoDomingo.ohlumen.r}</Text>
          <Text style={estilo.styles.nombre}>{StoDomingo.latin.nombre}</Text>
          <Text style={estilo.styles.cuerpo}>{StoDomingo.latin.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>
 
      {/* <!-- OH LUZ DE LA IGLESIA - forma larga --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>OH LUZ DE LA IGLESIA - forma larga</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageStodom5} source={require('./partes/imagescompletorio/ohluzlargo.png')} />
          <Text style={estilo.styles.cuerpo}>{StoDomingo.ohluz.cuerpo}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{StoDomingo.ohluz.v}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{StoDomingo.ohluz.r}</Text>
          <Text style={estilo.styles.nombre}>{StoDomingo.latin.nombre}</Text>
          <Text style={estilo.styles.cuerpo}>{StoDomingo.latin.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>

      {/* <!-- OH LUZ DE LA IGLESIA - forma breve --> */}
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={estilo.styles.antifona}>OH LUZ DE LA IGLESIA - forma breve</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Image style={estilo.styles.imageStodom6} source={require('./partes/imagescompletorio/ohluz.png')} />
          <Text style={estilo.styles.cuerpo}>{StoDomingo.ohluz.cuerpo}</Text>
          <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{StoDomingo.ohluz.v}</Text>
          <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{StoDomingo.ohluz.r}</Text>
          <Text style={estilo.styles.nombre}>{StoDomingo.latin.nombre}</Text>
          <Text style={estilo.styles.cuerpo}>{StoDomingo.latin.cuerpo}</Text>
          <Text>{" "}</Text>
        </CollapseBody>
      </Collapse>
      </View>

      <View>
      <Text>{" "}</Text>
      {/* <!-- ----------------------- --> */}
      <Text style={estilo.styles.nombre}>{partescompl[8]}</Text>
      <Text>{" "}</Text>
      <Text style={estilo.styles.cuerpo}>{partescompl[9]}</Text>
      {/* <!-- ----------------------- --> */}
      <Text>{" "}</Text>
      </View>


  {/* <!---------------------------------- SALMO DIFUNTOS -----------------------------> */}
      {/* <!-- ----------------------- --> */}
      {/* <SalmoDifuntos /> */}
      <View>
      <Text>{" "}</Text>
      <Text>{" "}</Text>
      <Text style={estilo.styles.nombre}>ORACIÓN POR LOS DIFUNTOS</Text>
      <Text>{" "}</Text>
      <Text style={estilo.styles.nombre}>{partescompl[10]}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{partescompl[11]}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{partescompl[12]}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{partescompl[13]}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{partescompl[14]}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{partescompl[15]}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{partescompl[16]}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{partescompl[17]}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{partescompl[18]}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{partescompl[19]}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{partescompl[20]}</Text>
      </View>
      {/* <!-- ----------------------- --> */}

      <View>
      {/* <!-- ----------------------- --> */}
      <Text style={estilo.styles.nombre}>{Difuntos.domingo.nombre}</Text>
      <Text style={estilo.styles.cuerpo}>{Difuntos.domingo.cuerpo}</Text>
      {/* <!-- ----------------------- --> */}
      <Text>{" "}</Text>
      <Text>{" "}</Text>
      <Text>{" "}</Text>
      </View>
      

    </ScrollView>
  </ImageBackground>
  );
}



