import React, { useState, useEffect } from 'react'
import { Text, TextInput, StyleSheet, View, ScrollView, TouchableOpacity, Alert, Image, StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import appfirebase from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appfirebase)

//secureTextEntry={true}  // Hace que los caracteres se muestren como "*"

export default function login(props) {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    // Cambiar el color de la barra de estado a blanco
    StatusBar.setBarStyle('light-content'); // Cambiar el texto a color claro (si es necesario)
    StatusBar.setBackgroundColor('transparent'); // Establecer un fondo transparente
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const logueo = async () => {
    try {
      await signInWithEmailAndPassword(auth, Email, password)
      Alert.alert('iniciando sesion', 'Accediendo..')
      props.navigation.navigate('mostrador')
    } catch (error) {
      console.log(error);
      Alert.alert('Correo electronico o contraseña incorrecto')
    }
  }
  return (
    <View style={styles.container}>
      {/* Círculo */}
      <View style={styles.circle}>
        <Image
          source={require('../assets/logomovil-v3.png')} 
          style={styles.logo}
        />
      </View>

      {/* Primer Input */}
      <TextInput onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Correo electronico"
      />

      {/* Segundo Input */}
      <View style={styles.passwordContainer}>
        <TextInput onChangeText={(text) => setPassword(text)}
          style={styles.inputPassword}
          placeholder="contraseña"
          secureTextEntry={!passwordVisible} // Alterna visibilidad
          autoCapitalize="none"

        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <Ionicons
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>


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
    width: 150,
    height: 150,
    borderRadius: 50,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 250, // Ancho fijo para centrar
    height: 50, // Misma altura que los inputs
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 250, // Ancho fijo para centrar
    height: 50, // Misma altura que los inputs
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  inputPassword: {
    flex: 1,
    paddingVertical: 10,
  },
  eyeIcon: {
    paddingHorizontal: 5,
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

