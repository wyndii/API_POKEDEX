import { createStackNavigator } from "@react-navigation/stack";
import { HomeUser } from "../screens/users/HomeUser";
import { FormUser } from "../screens/users/FormUser";
import { FormUserData } from "../hooks/useUserForm";
import { TareasScreen } from "../screens/tareasScreen";

export type StackUserParams = {
  FormUser: FormUserData;
  HomeUser: undefined;
  Tareas: undefined;
}

const Stack = createStackNavigator<StackUserParams>();

export const UserStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeUser'
      screenOptions={{
        headerShown: false,
      }}
    >
      
      <Stack.Screen
        name="Tareas"
        component={TareasScreen}
      />
    </Stack.Navigator>
  );
}