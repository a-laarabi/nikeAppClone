import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Product from "./src/screens/Product";
import ShoppingCart from "./src/screens/ShoppingCart";
import { HeaderCart } from "./src/components/HeaderCart";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options = {{
            headerRight: () => (<HeaderCart />),
          }}
        />
        <Stack.Screen name="Product Detail" component={Product}
        options = {{
            headerRight: () => (<HeaderCart />),
          }}/>
        {/* <Stack.Screen name='Product Detail' component={Product} options={{presentation: 'modal'}} /> */}
        <Stack.Screen name="cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
