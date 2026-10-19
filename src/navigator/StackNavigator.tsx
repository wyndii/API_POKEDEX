import { createStackNavigator } from "@react-navigation/stack";
import { Screen1 } from "../screens/stack/Screen1";
import { Screen2 } from "../screens/stack/Screen2";
import { Screen3 } from "../screens/stack/Screen3";
import { TareasScreen } from "../screens/tareasScreen";

export type StackParams = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Tareas: undefined;
}

const Stack = createStackNavigator<StackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Screen1'
      screenOptions={{
  headerShown: true,
  headerStyle: {
    backgroundColor: 'pink',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 22,
  },
  headerTintColor: 'purple',
}}
    >
      <Stack.Screen
        name="Screen1"
        component={Screen1}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
      />
      <Stack.Screen
        name="Screen3"
        component={Screen3}
      />
       <Stack.Screen
        name="Tareas"
         component={TareasScreen}
      />
    </Stack.Navigator>
  );
}