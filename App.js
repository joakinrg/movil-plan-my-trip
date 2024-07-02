import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/Main';
import Login from './src/Login';
import Registre from './src/Registre';
import Trip from './src/Trip';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name='Main' component={Main} options={{headerShown: false}}/>
        <Stack.Screen name='Log' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Reg' component={Registre} options={{headerShown: false}}/>
        <Stack.Screen name='Trip' component={Trip} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}