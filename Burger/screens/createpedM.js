import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button } from "react-native";

export default function createpedM (props) {

    const initialState={
        nombre:'',
        pedido:'',
        comentario:'',
    }

    const [state, setState] = useState (initialState)

    const handleChangeText = (value, name) => {
        setState({...state, [name]: value })
    }

    const savePedid = ()=>{
        console.log(state)
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>crear pedido</Text>

            <View style={styles.inputgroup}>
                <TextInput placeholder="nombre-id" onChangeText={(value)=> handleChangeText(value, 'nombre-id')} 
                value={state.nombre} />
            </View>

            <View style={styles.inputgroup}>
                <TextInput placeholder="pedido" onChangeText={(value)=> handleChangeText(value, 'pedido')} 
                value={state.nombre} />
            </View>

            <View style={styles.inputgroup}>
                <TextInput placeholder="comentario" onChangeText={(value)=> handleChangeText(value, 'comentario')} 
                value={state.nombre} />
            </View>

            <View >
                <Button style={styles.buttonSpacing} title="tomar peddido" onPress={savePedid}/>

                <Button style={styles.buttonSpacing} title="cancelar" onPress={() => props.navigation.navigate('mostrador')}/>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titulo:{
        textAlign:'center',
        fontSize: 18,
        marginTop: 12,
        marginBottom: 20,
    },
    container:{
        flex: 1,
        padding: 35,
    },
    inputgroup: {
        flex: 1,
        padding: 0,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    buttonSpacing :{
        marginTop: 20, // Opcional, puedes agregar espacio arriba
        height: 15, // Espacio entre los botones
    }
});