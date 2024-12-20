import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import login from './screens/login';
import mostrador from './screens/mostrador';
import createpedM from './screens/createpedM';
import mesas from './screens/mesas';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={login}
          options={{
            title: 'Inicio',
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#800000" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="mostrador"
          component={mostrador}
          options={{
            title: 'Mostrador',
            headerTitleAlign: "left",
            headerStyle: { backgroundColor: "#800000" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="createpedM"
          component={createpedM}
          options={{
            title: 'crear pedido',
            headerTitleAlign: "left",
            headerStyle: { backgroundColor: "#800000" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="mesas"
          component={mesas}
          options={{
            title: 'Mesas',
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#800000" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
