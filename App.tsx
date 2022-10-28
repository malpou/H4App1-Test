import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetColor from './screens/GetColor';
import GetName from './screens/GetName';
import Main from './screens/Main';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="GetName" component={GetName} />
        <Stack.Screen name="GetColor" component={GetColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
