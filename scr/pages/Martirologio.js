import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { Text, ScrollView, View, ImageBackground, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Collapse,CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

import Martires from './martirologio/textos/listaMartirologio.json';

import * as estilo from "../../componentes/estilos";

import CalendarPicker from 'react-native-calendar-picker';

import moment from 'moment';



var fechaCalendario;
var selectedStartDate1;

let customDatesStyles = [
 { date: "Jan 01 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 03 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 04 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 07 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 10 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 15 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 18 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 23 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 28 2021", style: {backgroundColor: '#eab62c40'} },
 
 { date: "Feb 04 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Feb 07 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Feb 12 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Feb 13 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Feb 18 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Feb 19 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Mar 25 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Apr 02 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Apr 04 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Apr 05 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Apr 20 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Apr 29 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Apr 30 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "May 01 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "May 08 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "May 10 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "May 19 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "May 21 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "May 24 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "May 26 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Jun 04 2021", style: {backgroundColor: '#eab62c40'} }, 
 { date: "Jun 06 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jun 10 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jun 19 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jun 23 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jun 25 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jun 27 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jun 29 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Jul 01 2021", style: {backgroundColor: '#eab62c40'} }, 
 { date: "Jul 07 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jul 09 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jul 20 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jul 22 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jul 24 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jul 28 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Aug 01 2021", style: {backgroundColor: '#eab62c40'} }, 
 { date: "Aug 02 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 08 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 12 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 14 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 15 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 17 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 18 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 23 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 28 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Sep 05 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Sep 10 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Sep 18 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Sep 24 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Sep 28 2021", style: {backgroundColor: '#eab62c40'} },
 
 { date: "Oct 04 2021", style: {backgroundColor: '#eab62c40'} }, 
 { date: "Oct 05 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 06 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 07 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 09 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 14 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 15 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 19 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 22 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Nov 01 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Nov 03 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Nov 07 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Nov 08 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Nov 15 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Nov 24 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Dec 01 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Dec 08 2021", style: {backgroundColor: '#eab62c40'} },


];


class MartirologioP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }


  onDateChange(date) {
    fechaCalendario = moment(date).format('DDMM');
    
    switch (fechaCalendario) {
  case '0101':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0101.fecha, Martires.fecha0101.nombre, Martires.fecha0101.fiesta, Martires.fecha0101.resena ];
    break;
  case '0301':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0301.fecha, Martires.fecha0301.nombre, Martires.fecha0301.fiesta, Martires.fecha0301.resena ];
    break;
  case '0401':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0401.fecha, Martires.fecha0401.nombre, Martires.fecha0401.fiesta, Martires.fecha0401.resena ];
    break;
  case '0701':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0701.fecha, Martires.fecha0701.nombre, Martires.fecha0701.fiesta, Martires.fecha0701.resena ];
    break;
  case '1001':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1001.fecha, Martires.fecha1001.nombre, Martires.fecha1001.fiesta, Martires.fecha1001.resena ];
    break;
  case '1501':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1501.fecha, Martires.fecha1501.nombre, Martires.fecha1501.fiesta, Martires.fecha1501.resena ];
    break;
  case '1801':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1801.fecha, Martires.fecha1801.nombre, Martires.fecha1801.fiesta, Martires.fecha1801.resena ];
    break;
  case '2301':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2301.fecha, Martires.fecha2301.nombre, Martires.fecha2301.fiesta, Martires.fecha2301.resena ];
    break;
    case '2801':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2801.fecha, Martires.fecha2801.nombre, Martires.fecha2801.fiesta, Martires.fecha2801.resena ];
    break;
  
  case '0402':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0402.fecha, Martires.fecha0402.nombre, Martires.fecha0402.fiesta, Martires.fecha0402.resena ];
    break;
  case '0702':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0702.fecha, Martires.fecha0702.nombre, Martires.fecha0702.fiesta, Martires.fecha0702.resena ];
    break;
  case '1202':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1202.fecha, Martires.fecha1202.nombre, Martires.fecha1202.fiesta, Martires.fecha1202.resena ];
    break;
  case '1302':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1302.fecha, Martires.fecha1302.nombre, Martires.fecha1302.fiesta, Martires.fecha1302.resena ];
    break;
  case '1802':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1802.fecha, Martires.fecha1802.nombre, Martires.fecha1802.fiesta, Martires.fecha1802.resena ];
    break;
  case '1902':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1902.fecha, Martires.fecha1902.nombre, Martires.fecha1902.fiesta, Martires.fecha1902.resena ];
    break;

  case '2503':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2503.fecha, Martires.fecha2503.nombre, Martires.fecha2503.fiesta, Martires.fecha2503.resena ];
    break;

  case '0204':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0204.fecha, Martires.fecha0204.nombre, Martires.fecha0204.fiesta, Martires.fecha0204.resena ];
    break;
  case '0404':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0404.fecha, Martires.fecha0404.nombre, Martires.fecha0404.fiesta, Martires.fecha0404.resena ];
    break;
  case '0504':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0504.fecha, Martires.fecha0504.nombre, Martires.fecha0504.fiesta, Martires.fecha0504.resena ];
    break;
  case '2004':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2004.fecha, Martires.fecha2004.nombre, Martires.fecha2004.fiesta, Martires.fecha2004.resena ];
    break;
  case '2904':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2904.fecha, Martires.fecha2904.nombre, Martires.fecha2904.fiesta, Martires.fecha2904.resena ];
    break;
  case '3004':
    selectedStartDate1 = [fechaCalendario, Martires.fecha3004.fecha, Martires.fecha3004.nombre, Martires.fecha3004.fiesta, Martires.fecha3004.resena ];
    break;

  case '0105':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0105.fecha, Martires.fecha0105.nombre, Martires.fecha0105.fiesta, Martires.fecha0105.resena ];
    break;
  case '0805':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0805.fecha, Martires.fecha0805.nombre, Martires.fecha0805.fiesta, Martires.fecha0805.resena ];
    break;
  case '1005':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1005.fecha, Martires.fecha1005.nombre, Martires.fecha1005.fiesta, Martires.fecha1005.resena ];
    break;
  case '1905':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1905.fecha, Martires.fecha1905.nombre, Martires.fecha1905.fiesta, Martires.fecha1905.resena ];
    break;
  case '2105':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2105.fecha, Martires.fecha2105.nombre, Martires.fecha2105.fiesta, Martires.fecha2105.resena ];
    break;
  case '2405':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2405.fecha, Martires.fecha2405.nombre, Martires.fecha2405.fiesta, Martires.fecha2405.resena ];
    break;
  case '2605':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2605.fecha, Martires.fecha2605.nombre, Martires.fecha2605.fiesta, Martires.fecha2605.resena ];
    break;

  case '0406':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0406.fecha, Martires.fecha0406.nombre, Martires.fecha0406.fiesta, Martires.fecha0406.resena ];
    break;
  case '0606':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0606.fecha, Martires.fecha0606.nombre, Martires.fecha0606.fiesta, Martires.fecha0606.resena ];
    break;
  case '1006':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1006.fecha, Martires.fecha1006.nombre, Martires.fecha1006.fiesta, Martires.fecha1006.resena ];
    break;
  case '1906':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1906.fecha, Martires.fecha1906.nombre, Martires.fecha1906.fiesta, Martires.fecha1906.resena ];
    break;
  case '2306':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2306.fecha, Martires.fecha2306.nombre, Martires.fecha2306.fiesta, Martires.fecha2306.resena ];
    break;
  case '2506':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2506.fecha, Martires.fecha2506.nombre, Martires.fecha2506.fiesta, Martires.fecha2506.resena ];
    break;
  case '2706':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2706.fecha, Martires.fecha2706.nombre, Martires.fecha2706.fiesta, Martires.fecha2706.resena ];
    break;
  case '2906':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2605.fecha, Martires.fecha2605.nombre, Martires.fecha2605.fiesta, Martires.fecha2605.resena ];
    break;

  case '0107':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0107.fecha, Martires.fecha0107.nombre, Martires.fecha0107.fiesta, Martires.fecha0107.resena ];
    break;
  case '0707':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0707.fecha, Martires.fecha0707.nombre, Martires.fecha0707.fiesta, Martires.fecha0707.resena ];
    break;
  case '0907':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0907.fecha, Martires.fecha0907.nombre, Martires.fecha0907.fiesta, Martires.fecha0907.resena ];
    break;
  case '2007':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2007.fecha, Martires.fecha2007.nombre, Martires.fecha2007.fiesta, Martires.fecha2007.resena ];
    break;
  case '2207':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2207.fecha, Martires.fecha2207.nombre, Martires.fecha2207.fiesta, Martires.fecha2207.resena ];
    break;
  case '2407':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2407.fecha, Martires.fecha2407.nombre, Martires.fecha2407.fiesta, Martires.fecha2407.resena ];
    break;
  case '2807':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2807.fecha, Martires.fecha2807.nombre, Martires.fecha2807.fiesta, Martires.fecha2807.resena ];
    break;

    case '0108':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0108.fecha, Martires.fecha0108.nombre, Martires.fecha0108.fiesta, Martires.fecha0108.resena ];
      break;
    case '0208':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0208.fecha, Martires.fecha0208.nombre, Martires.fecha0208.fiesta, Martires.fecha0208.resena ];
      break;
    case '0808':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0808.fecha, Martires.fecha0808.nombre, Martires.fecha0808.fiesta, Martires.fecha0808.resena ];
      break;
    case '1208':
      selectedStartDate1 = [fechaCalendario, Martires.fecha1208.fecha, Martires.fecha1208.nombre, Martires.fecha1208.fiesta, Martires.fecha1208.resena ];
      break;
    case '1408':
      selectedStartDate1 = [fechaCalendario, Martires.fecha1408.fecha, Martires.fecha1408.nombre, Martires.fecha1408.fiesta, Martires.fecha1408.resena ];
      break;
    case '1508':
      selectedStartDate1 = [fechaCalendario, Martires.fecha1508.fecha, Martires.fecha1508.nombre, Martires.fecha1508.fiesta, Martires.fecha1508.resena ];
      break;
    case '1708':
      selectedStartDate1 = [fechaCalendario, Martires.fecha1708.fecha, Martires.fecha1708.nombre, Martires.fecha1708.fiesta, Martires.fecha1708.resena ];
      break;
    case '1808':
      selectedStartDate1 = [fechaCalendario, Martires.fecha1808.fecha, Martires.fecha1808.nombre, Martires.fecha1808.fiesta, Martires.fecha1808.resena ];
      break;
    case '2308':
      selectedStartDate1 = [fechaCalendario, Martires.fecha2308.fecha, Martires.fecha2308.nombre, Martires.fecha2308.fiesta, Martires.fecha2308.resena ];
      break;
    case '2808':
      selectedStartDate1 = [fechaCalendario, Martires.fecha2808.fecha, Martires.fecha2808.nombre, Martires.fecha2808.fiesta, Martires.fecha2808.resena ];
      break;

    case '0509':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0509.fecha, Martires.fecha0509.nombre, Martires.fecha0509.fiesta, Martires.fecha0509.resena ];
      break;
    case '1009':
      selectedStartDate1 = [fechaCalendario, Martires.fecha1009.fecha, Martires.fecha1009.nombre, Martires.fecha1009.fiesta, Martires.fecha1009.resena ];
      break;
    case '1809':
      selectedStartDate1 = [fechaCalendario, Martires.fecha1809.fecha, Martires.fecha1809.nombre, Martires.fecha1809.fiesta, Martires.fecha1809.resena ];
      break;
    case '2409':
      selectedStartDate1 = [fechaCalendario, Martires.fecha2409.fecha, Martires.fecha2409.nombre, Martires.fecha2409.fiesta, Martires.fecha2409.resena ];
      break;
    case '2809':
      selectedStartDate1 = [fechaCalendario, Martires.fecha2809.fecha, Martires.fecha2809.nombre, Martires.fecha2809.fiesta, Martires.fecha2809.resena ];
      break;

    case '0410':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0410.fecha, Martires.fecha0410.nombre, Martires.fecha0410.fiesta, Martires.fecha0410.resena ];
      break;
    case '0510':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0510.fecha, Martires.fecha0510.nombre, Martires.fecha0510.fiesta, Martires.fecha0510.resena ];
      break;
    case '0610':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0610.fecha, Martires.fecha0610.nombre, Martires.fecha0610.fiesta, Martires.fecha0610.resena ];
      break;
    case '0710':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0710.fecha, Martires.fecha0710.nombre, Martires.fecha0710.fiesta, Martires.fecha0710.resena ];
      break;
    case '0910':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0910.fecha, Martires.fecha0910.nombre, Martires.fecha0910.fiesta, Martires.fecha0910.resena ];
      break;
    case '1410':
      selectedStartDate1 = [fechaCalendario, Martires.fecha1410.fecha, Martires.fecha1410.nombre, Martires.fecha1410.fiesta, Martires.fecha1410.resena ];
      break;
    case '1510':
      selectedStartDate1 = [fechaCalendario, Martires.fecha1510.fecha, Martires.fecha1510.nombre, Martires.fecha1510.fiesta, Martires.fecha1510.resena ];
      break;
    case '1910':
      selectedStartDate1 = [fechaCalendario, Martires.fecha1910.fecha, Martires.fecha1910.nombre, Martires.fecha1910.fiesta, Martires.fecha1910.resena ];
      break;
    case '2210':
      selectedStartDate1 = [fechaCalendario, Martires.fecha2210.fecha, Martires.fecha2210.nombre, Martires.fecha2210.fiesta, Martires.fecha2210.resena ];
      break;

    case '0111':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0111.fecha, Martires.fecha0111.nombre, Martires.fecha0111.fiesta, Martires.fecha0111.resena ];
      break;
    case '0311':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0311.fecha, Martires.fecha0311.nombre, Martires.fecha0311.fiesta, Martires.fecha0311.resena ];
      break;
    case '0711':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0711.fecha, Martires.fecha0711.nombre, Martires.fecha0711.fiesta, Martires.fecha0711.resena ];
      break;
    case '0811':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0811.fecha, Martires.fecha0811.nombre, Martires.fecha0811.fiesta, Martires.fecha0811.resena ];
      break;
    case '1511':
      selectedStartDate1 = [fechaCalendario, Martires.fecha1511.fecha, Martires.fecha1511.nombre, Martires.fecha1511.fiesta, Martires.fecha1511.resena ];
      break;
    case '2411':
      selectedStartDate1 = [fechaCalendario, Martires.fecha2411.fecha, Martires.fecha2411.nombre, Martires.fecha2411.fiesta, Martires.fecha2411.resena ];
      break;

    case '0112':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0112.fecha, Martires.fecha0112.nombre, Martires.fecha0112.fiesta, Martires.fecha0112.resena ];
      break;
    case '0812':
      selectedStartDate1 = [fechaCalendario, Martires.fecha0812.fecha, Martires.fecha0812.nombre, Martires.fecha0812.fiesta, Martires.fecha0812.resena ];
      break;

  default:
    selectedStartDate1 = null;
}


    this.setState({      
      //moment(date).format('DDMM') deja solo el formato'DDMMYYYY' or'DDMM'
      selectedStartDate : selectedStartDate1,
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate : '';

    return (
    <ImageBackground source={require('../../assets/Marca_agua_escudo_OP.jpg')} style={estilo.styles.imagebg}>
      <>
      <ScrollView style={estilo.container}>
      
      <Text> </Text>
      <Text> </Text>
      <Text style={estilo.styles.titulodiaTab}>MARTIROLÓGIO</Text>
      <Text style={estilo.styles.titulodiaTab}>DOMINICANO</Text>
      <Text> </Text>
      <Text> </Text>
        <CalendarPicker
          onDateChange={this.onDateChange}
          // Optional. Default first day of week will be Sunday. You can set start of week with number from 0 to 6. Default is 0 or Sunday
          firstDay={1}
          // Optional. Title of button for previous month. Default is Previous
          previousTitle={'atrás'}
          // Optional. Title of button for next month. Default is Next
          nextTitle={'siguiente'}

          selectedDayColor={'#eab62c'}
          todayBackgroundColor={'transparent'}
          headingLevel={1}
          weekdays={['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM']}
          months={['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO',          'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE' ]}
          scaleFactor={355}
          customDatesStyles={customDatesStyles}


        />

        <View  style={estilo.styles.container}>
          <Text>{" "}</Text>
          <Text style={estilo.styles.enlace}>{startDate[1]}</Text>
          <Text style={estilo.styles.cuerpoColor}>{startDate[2]}</Text>
          <Text style={estilo.styles.cita}>{startDate[3]}</Text>
          <Text>{" "}</Text>
          <Text style={estilo.styles.cuerpo}>{startDate[4]}</Text>
          <Text>{" "}</Text>
          <Text>{" "}</Text>
          <Text>{" "}</Text>
          </View>
       
      </ScrollView>
      </>
  </ImageBackground>
    );
  }
}


const Stacko = createStackNavigator();

export default function MartirologioPage() {
  return (
  <Stacko.Navigator headerMode= "none" >
    <Stacko.Screen name="Martirologio" component={MartirologioP} />
  </Stacko.Navigator>
 

    );
}

