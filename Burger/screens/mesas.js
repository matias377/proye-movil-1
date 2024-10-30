import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

export default function Mesas(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acá van las mesas</Text>

      {/* Botones en la parte superior */}
      <View style={styles.topContainer}>
        {/* Botón de la izquierda - Vuelve a la pantalla de mostrador */}
        <TouchableOpacity style={styles.topButton} onPress={() => props.navigation.navigate('salon')}>
          <Text style={styles.buttonText}>Salon</Text>
        </TouchableOpacity>

        {/* Botón de la derecha - Navega a la pantalla de patio */}
        <TouchableOpacity style={styles.topButton} onPress={() => props.navigation.navigate('patio')}>
          <Text style={styles.buttonText}>Patio</Text>
        </TouchableOpacity>
      </View>

      {/* Botones en la parte inferior */}
      <View style={styles.bottomContainer}>
        {/* Botón de la izquierda - Vuelve a la pantalla de mostrador */}
        <TouchableOpacity style={styles.bottomButton} onPress={() => props.navigation.navigate('mostrador')}>
          <Text style={styles.buttonText}>Mostrador</Text>
        </TouchableOpacity>

        {/* Botón de la derecha - Navega a la pantalla de mesas */}
        <TouchableOpacity style={styles.bottomButton} onPress={() => props.navigation.navigate('mesas')}>
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
  topContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30, // Ajusta esto para posicionar los botones en la parte superior
    justifyContent: 'space-between',
    width: '90%',
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    justifyContent: 'space-between',
    width: '90%',
  },
  topButton: {
    flex: 1,
    backgroundColor: 'green', // Color diferente para los botones de arriba
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  bottomButton: {
    flex: 1,
    backgroundColor: 'red', // Color diferente para los botones de abajo
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

