import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Dolar from './components/Dolar';
import Api from './components/Api';

export default function App() {
  const [dolar, setDolar] = useState("");

  async function buscarDolar(){
    const response = await Api.get('json/last/USD-BRL');
    setDolar(response.data.USDBRL);

  }

  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.text}>Converter Dólar para Real</Text>

        <TouchableOpacity 
          style={styles.botao}
          onPress={buscarDolar}
        > 
          <Text style={styles.txtBotao}>CONVERTER</Text>
        </TouchableOpacity>

        <Dolar data={dolar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B5750',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '30%',
  },

  bloco:{
    fontFamily: 'sans-serif',
    backgroundColor: '#6B7F82',
    width: '100%',
    alignItems:'center',
    borderRadius: 15,
    padding: 20,
    borderRadius: 10,
    borderColor: '#8EB8E5',
    borderWidth: 5,
  },

  text: {
    fontSize:30,
    color: '#492C1D',
    fontFamily: 'sans-serif',
  },

botao:{
  display: 'flex',
  justifyContent: 'center',
  width: 'maxContent',
  height: 40,
  marginVertical: 15,
  backgroundColor:'#7C99B4',
  borderRadius: 10,
  borderColor: '#8EB8E5',
  borderWidth: 5,
  padding: 20,
},

txtBotao:{
  fontWeight: 'bold',
  color: '#8EB8E5',
  fontSize:30,
  textAlign:'center',
}

});