import { ScrollView, StyleSheet, Text } from 'react-native';
import Tarjeta from '../../components/Tarjeta';

const TEXTOS_TARJETAS = [
  'React Native',
  'Expo Router',
  'useState',
  'Pressable',
  'Props',
  'StyleSheet',
];

export default function Tarjetas() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Tarjetas</Text>
      {TEXTOS_TARJETAS.map((texto) => (
        <Tarjeta key={texto} texto={texto} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 16,
  },
});
