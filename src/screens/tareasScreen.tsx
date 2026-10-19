
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

type Estado = 'Pendiente' | 'En desarrollo' | 'Realizada';

interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  estado: Estado;
}

export const TareasScreen = () => {
  const [tareas, setTareas] = useState<Tarea[]>([
    {
      id: '1',
      titulo: 'Interfaz de Tareas',
      descripcion:
        'Diseñar la pantalla principal con título, descripción y estado.',
      estado: 'En desarrollo',
    },
    {
      id: '2',
      titulo: 'Conexión de navegación',
      descripcion:
        'Revisar que el botón del menú abra la pantalla correctamente.',
      estado: 'Pendiente',
    },
    {
      id: '3',
      titulo: 'Estructura base',
      descripcion:
        'Crear los componentes y las carpetas del proyecto.',
      estado: 'Realizada',
    },
  ]);

  const cambiarEstado = (id: string) => {
    setTareas(actuales =>
      actuales.map(tarea => {
        if (tarea.id === id) {
          let nuevoEstado: Estado;

          if (tarea.estado === 'Pendiente') {
            nuevoEstado = 'En desarrollo';
          } else if (tarea.estado === 'En desarrollo') {
            nuevoEstado = 'Realizada';
          } else {
            nuevoEstado = 'Pendiente';
          }

          return { ...tarea, estado: nuevoEstado };
        }

        return tarea;
      })
    );
  };

  const colorEstado = (estado: Estado) => {
    if (estado === 'Pendiente') {
      return '#e74c3c';
    }

    if (estado === 'En desarrollo') {
      return '#e67e22';
    }

    return '#209450';
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gestión de Tareas</Text>

      <FlatList
        data={tareas}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <View style={styles.encabezado}>
              <Text style={styles.nombre}>
                {item.titulo}
              </Text>

              <View
                style={[
                  styles.estado,
                  {
                    backgroundColor: colorEstado(item.estado),
                  },
                ]}
              >
                <Text style={styles.textoEstado}>
                  {item.estado}
                </Text>
              </View>
            </View>

            <Text style={styles.descripcion}>
              {item.descripcion}
            </Text>

            <TouchableOpacity
              style={styles.boton}
              onPress={() => cambiarEstado(item.id)}
              activeOpacity={0.8}
            >
              <Text style={styles.textoBoton}>
                Cambiar estado
              </Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={
          <Image
            source={{
              uri: 'https://img.gamdb.com/character/large/65ad737f6ad4bfdd7e4f2db865ad751e-ns.png',
            }}
            style={styles.imagenInferior}
            resizeMode="contain"
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#8dcfec',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },

  lista: {
    paddingBottom: 20,
  },

  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },

  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495e',
    flex: 1,
    marginRight: 8,
  },

  descripcion: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },

  estado: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
  },

  textoEstado: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  boton: {
    backgroundColor: '#264a83',
    padding: 9,
    borderRadius: 5,
    alignItems: 'center',
  },

  textoBoton: {
    color: '#ffffff',
    fontWeight: '600',
  },

  imagenInferior: {
    width: '100%',
    height: 220,
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },
});
