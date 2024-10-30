import React, { useState, useEffect } from 'react'
import { Text, TextInput, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
//      <View 
//        style={styles.Text}
//        onPress={() => props.navigation.navigate ('olvido')}>
//        <Text>¿olvido contraseña?</Text>
//      </View>

export default function login(props) {
  const [input1, setInput1] = useState('');
  //const [input2, setInput2] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      {/* Círculo */}
      <View style={styles.circle}>
        <Text>Círculo</Text>
      </View>

      {/* Primer Input */}
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario o Correo electronico"
        value={input1}
        onChangeText={setInput1}
      />

      {/* Segundo Input */}
      <TextInput
        style={styles.input}
        placeholder="contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}  // Hace que los caracteres se muestren como "*"
      />

      {/* Botón que navega a otra pantalla */}
      <TouchableOpacity 
        style={styles.buttonNavigate}
        onPress={() => props.navigation.navigate('mostrador')}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#8B1874',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonNavigate: {
    width: 250,
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  Text: {
    alignItems: 'center',
    color: 'blue'
  }
});

