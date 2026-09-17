import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type TarjetaProps = {
  texto: string;
};

export default function Tarjeta({ texto }: TarjetaProps) {
  const [seleccionada, setSeleccionada] = useState(false);

  return (
    <Pressable
      onPress={() => setSeleccionada((prev) => !prev)}
      style={[styles.tarjeta, seleccionada && styles.tarjetaSeleccionada]}
    >
      <Text style={[styles.texto, seleccionada && styles.textoSeleccionado]}>
        {texto}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    height: 100,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  tarjetaSeleccionada: {
    backgroundColor: '#4f46e5',
    borderColor: '#4f46e5',
  },
  texto: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    textAlign: 'center',
  },
  textoSeleccionado: {
    color: '#ffffff',
  },
});
