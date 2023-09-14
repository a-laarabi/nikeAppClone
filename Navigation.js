import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Product from './src/screens/Product';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Product Detail' component={Product} />
        {/* <Stack.Screen name='Product Detail' component={Product} options={{presentation: 'modal'}} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation