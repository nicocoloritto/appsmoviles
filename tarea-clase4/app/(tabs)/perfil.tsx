import { useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Perfil() {
  const [nombre, setNombre] = useState('Nicolás Coloritto');
  const [nombreIngresado, setNombreIngresado] = useState(nombre);
  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = () => {
    setNombreIngresado(nombre);
    setModalVisible(true);
  };

  const guardarNombre = () => {
    if (nombreIngresado.trim().length > 0) {
      setNombre(nombreIngresado.trim());
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarEmoji}>👤</Text>
      </View>
      <Text style={styles.nombre}>{nombre}</Text>

      <Pressable
        style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
        onPress={abrirModal}
      >
        <Text style={styles.textoBoton}>Cambiar nombre</Text>
      </Pressable>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContenido}>
            <Text style={styles.modalTitulo}>Cambiar nombre</Text>
            <TextInput
              style={styles.input}
              value={nombreIngresado}
              onChangeText={setNombreIngresado}
              placeholder="Nombre y apellido"
              autoFocus
            />
            <Pressable
              style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
              onPress={guardarNombre}
            >
              <Text style={styles.textoBoton}>Guardar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#4f46e5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  avatarEmoji: {
    fontSize: 40,
  },
  nombre: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 16,
  },
  boton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  botonPresionado: {
    opacity: 0.7,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContenido: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    gap: 16,
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
  },
});
