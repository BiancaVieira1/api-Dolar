import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Dolar(props) {
  return (
   <>
   <Text style={styles.text}>Compra: {props.data.bid}</Text>
   <Text style={styles.text}>Venda: {props.data.ask}</Text>
   <Text style={styles.text}>Variação: {props.data.varBid}</Text>
   <Text style={styles.text}>Maximo: {props.data.high}</Text>
   <Text style={styles.text}>Minimo: {props.data.low}</Text>
   </>
  );
}

const styles = StyleSheet.create({
   text:{
       marginTop:10,
       fontSize:20,
       color: '#492C1D',
       fontFamily: 'sans-serif',
   }
});