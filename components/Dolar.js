import React from 'react';
import { StyleSheet, Text, View}
from 'react-native';

export default function Dolar(props) {
  return (
      <>
          <Text style={StyleSheet.texto}>Compra: {props.data.bid}</Text>
          <Text style={StyleSheet.texto}>Venda: {props.data.ask}</Text>
          <Text style={StyleSheet.texto}>Variação: {props.data.varBid}</Text>
          <Text style={StyleSheet.texto}>Máximo: {props.data.high}</Text>
          <Text style={StyleSheet.texto}>Mínimo: {props.data.low}</Text>
      </>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 50,
    marginTop: 10,
  }
});