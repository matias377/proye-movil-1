import React, { useState, useEffect } from 'react'
import { Text, TextInput, StyleSheet, View, ScrollView, TouchableOpacity, Alert } from 'react-native'

import appfirabase from '../firebaseConfig';
import { getAuth, singInWithEmailAndPassword } from 'firebase/auth';
const auth =getAuth (appfirabase)


export default function login(props) {
  const [Email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const logueo = async()=>{
    try {
        await singInWithEmailAndPassword(auth, Email, password)
        Alert.alert('iniciando sesion', 'Acediendo..')
        props.navigation.navigate('mostrador')
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      {/* Círculo */}
      <View style={styles.circle}>
        <image source={require('@/assets/logomovil.png')} />
        <Text>Círculo</Text>
      </View>

      {/* Primer Input */}
      <TextInput onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Correo electronico"
      />

      {/* Segundo Input */}
      <TextInput onChangeText={(text) => setPassword(text)}
        style={styles.input}
        placeholder="contraseña"
        secureTextEntry={true}  // Hace que los caracteres se muestren como "*"
      />

      {/* Botón que navega a otra pantalla */}
      <TouchableOpacity
        style={styles.buttonNavigate}
        onPress={logueo}>
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

