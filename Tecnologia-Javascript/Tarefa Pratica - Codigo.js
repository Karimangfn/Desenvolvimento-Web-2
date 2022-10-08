import React, {useState} from 'react';
import {Text, TextInput, View, Button, StyleSheet} from 'react-native';

const App = () => {
const [texto, setTexto] = useState('');
const imprimirTexto = () => {
  alert(texto);
};
return (
  <View style = {styles.EstiloView}>
  <Text> Digite um Texto: </Text>
  <TextInput style = {styles.EstiloTexto} onChangeText = {(value) => setTexto(value)}/>
  <View>
  <Button style = {styles.EstiloButton} title='Enviar' onPress = {imprimirTexto}/>
  </View>
  </View>
)
};
const styles = StyleSheet.create({
  EstiloView:{padding:40},
  EstiloTexto:{width:'100%', borderWidth: 5},
  EstiloButton:{marginTop: 15, borderWidth: 3}
});
export default App;