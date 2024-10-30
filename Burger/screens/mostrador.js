import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'




export default function mostrador(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>aca lo de mostrador</Text>

      {/* Botones en la parte inferior */}
      <View style={styles.bottomContainer}>

        {/* Botón de la izquierda - Vuelve a la misma pantalla */}
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('mostrador')}>
          <Text style={styles.buttonText}>Mostrador</Text>
        </TouchableOpacity>

        {/* Botón de la derecha - Navega a la pantalla de Mesas */}
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('mesas')}>
          <Text style={styles.buttonText}>Mesas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    flex: 1,
    backgroundColor: 'red',
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

