import { View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import { DrawerContentScrollView, DrawerContentComponentProps } from "@react-navigation/drawer";

interface BtnProps{
  navigate: () => void;
  text: string;
}

const BtnMenu = ( { navigate, text }:BtnProps ) => {
  return(
    <TouchableOpacity
      onPress={ navigate }
    >
      <View
        style={ style.bgText }
      >
        <Text style={ style.text } >
          { text }
        </Text>
      </View> 
    </TouchableOpacity>
  );
}

export const DrawerMenu = ( { navigation }: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View
          style={ style.borderAvatar }
        >
          <Image
            style={ style.avatar }
            source={{ uri: 'https://i.pinimg.com/236x/b5/65/d4/b565d45ee2fdb3536f4d40eef0d60191.jpg' }}
          />
        </View>
        <Text
          style={ style.userText }
        >
           Wyndii
        </Text>
        <View>
          <BtnMenu
            navigate={ () => navigation.navigate('StackNavigator') }
            text=" Bolitas y Palitos"
          />
          <BtnMenu
            navigate={ () => navigation.navigate('PokemonNavigator') }
            text="Pokedex"
          />
          <BtnMenu
            navigate={ () => navigation.navigate('FormScreen') }
            text="FormScreen"
          />
          <BtnMenu
            navigate={ () => navigation.navigate('ImagePickerScreen') }
            text="Seleccionar Imagen"
          />
          <BtnMenu
            navigate={ () => navigation.navigate('LocationScreen') }
            text="Localización"
          />
          <BtnMenu
            navigate={ () => navigation.navigate('UserStackNavigator') }
            text="Gestión de Usuarios"
          /> <BtnMenu
            navigate={ () => navigation.navigate('Tareas') }
            text="Tareas"
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const style = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
  bgText: {
    backgroundColor: 'gray',
    opacity: 0.7,
    marginTop: 15,
    width: 200,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 5
  },
    avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white"
  },
  borderAvatar: {
    height: 210,
    width: 210,
    borderWidth: 25,
    borderColor: 'olive',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
    userText: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
  }
});