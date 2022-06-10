import React,{useState} from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';
import Dolar from './components/Dolar';
import Api from './components/Api';

const image = {uri: "https://i.pinimg.com/736x/5d/cb/27/5dcb27e015335a776e74abc7558a5105.jpg"}



export default function App() {
  const [dolar, setDolar] = useState("");


  
  async function buscarDolar(){
    const response = await Api.get('json/last/USD-BRL');
    setDolar(response.data.USDBRL);

  }

  return (
    <View style={styles.container}>

<ImageBackground style={{
position: "absolute",
height: '100%',
width: '100%'
}}source={image}>

</ImageBackground>
      <View style={styles.bloco}>
      <Text style={styles.txt}> Cotação de Moedas </Text>

        
      <TouchableOpacity
      style={styles.botao}
      onPress={buscarDolar}
      >
        <Text style={styles.txtBotao}> Dólar para Real </Text>
      </TouchableOpacity>

      <Dolar data={dolar} />
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco: {
    width:'100%',
    alignItens: 'center',
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
  },
  botao: {
    width:'80%',
    fontSize: 30,
    marginTop: 30,
    backgroundColor: 	'#40E0D0',
    alignItems: 'center',
  },
  txtBotao: {
    fontSize:20,
    textAlign: 'center',
  },
  txt: {
     fontSize: 20,
     textAlign: 'center',
  },
    image: {
      flex: 1,
      justifyContent: "center"
    }
});
