import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.valor}>{contador}</Text>
      <Pressable
        style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
        onPress={() => setContador((prev) => prev + 1)}
      >
        <Text style={styles.textoBoton}>Incrementar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  valor: {
    fontSize: 64,
    fontWeight: '700',
    color: '#1e293b',
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
    fontSize: 18,
    fontWeight: '600',
  },
});
