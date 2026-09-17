import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Producto } from '../data/productos';

type ProductoItemProps = {
  producto: Producto;
  esFavorito: boolean;
  onPress: () => void;
  onLongPress: () => void;
};

export default function ProductoItem({
  producto,
  esFavorito,
  onPress,
  onLongPress,
}: ProductoItemProps) {
  const fuente = producto.imagen ?? { uri: producto.imagenUri };

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.item,
        esFavorito && styles.itemFavorito,
        pressed && styles.itemPresionado,
      ]}
    >
      <Image source={fuente} style={styles.imagen} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.titulo} numberOfLines={1}>
          {producto.titulo}
        </Text>
        <Text style={styles.precio}>${producto.precio.toLocaleString('es-AR')}</Text>
      </View>
      {esFavorito && (
        <View style={styles.badgeFavorito}>
          <Text style={styles.badgeTexto}>★</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    padding: 10,
    marginBottom: 12,
    gap: 12,
  },
  itemFavorito: {
    borderColor: '#f59e0b',
    backgroundColor: '#fffbeb',
  },
  itemPresionado: {
    opacity: 0.7,
  },
  imagen: {
    width: 64,
    height: 64,
    borderRadius: 10,
    backgroundColor: '#f1f5f9',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    gap: 4,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  precio: {
    fontSize: 14,
    color: '#4f46e5',
    fontWeight: '700',
  },
  badgeFavorito: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f59e0b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeTexto: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 16,
  },
});
