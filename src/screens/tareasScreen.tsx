import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

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
      descripcion: 'Diseñar la pantalla principal con título, descripción y estado.',
      estado: 'En desarrollo',
    },
    {
      id: '2',
      titulo: 'Conexión de navegación',
      descripcion: 'Asegurar que el botón del menú abra correctamente la pantalla.',
      estado: 'Pendiente',
    },
    {
      id: '3',
      titulo: 'Estructura base',
      descripcion: 'Crear componentes y carpetas del proyecto.',
      estado: 'Realizada',
    },
  ]);

  const cambiarEstado = (id: string) => {
    setTareas(tareasActuales =>
      tareasActuales.map(tarea => {
        if (tarea.id !== id) return tarea;

        const estados: Estado[] = ['Pendiente', 'En desarrollo', 'Realizada'];
        const siguiente = (estados.indexOf(tarea.estado) + 1) % estados.length;

        return { ...tarea, estado: estados[siguiente] };
      })
    );
  };

  const obtenerColorBadge = (estado: Estado) => {
    switch (estado) {
      case 'Pendiente':
        return '#E74C3C'; 
      case 'En desarrollo':
        return '#E67E22'; 
      case 'Realizada':
        return '#2ECC71'; 
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gestión de Tareas</Text>

      <FlatList
        data={tareas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <View style={styles.encabezadoTarjeta}>
              <Text style={styles.nombre}>{item.titulo}</Text>
              <View style={[styles.badge, { backgroundColor: obtenerColorBadge(item.estado) }]}>
                <Text style={styles.textoBadge}>{item.estado}</Text>
              </View>
            </View>

            <Text style={styles.descripcion}>{item.descripcion}</Text>

            <TouchableOpacity
              style={styles.boton}
              onPress={() => cambiarEstado(item.id)}
            >
              <Text style={styles.textoBoton}>Cambiar Estado</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F6F8',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2C3E50',
  },
  tarjeta: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  encabezadoTarjeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495E',
    flex: 1,
    marginRight: 10,
  },
  descripcion: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 14,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  textoBadge: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  boton: {
    backgroundColor: '#345995',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontWeight: '600',
  },
});
