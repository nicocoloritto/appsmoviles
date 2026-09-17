import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import ProductoItem from '../components/ProductoItem';
import DetalleProductoModal from '../components/DetalleProductoModal';
import { PRODUCTOS, Producto } from '../data/productos';

export default function Galeria() {
  const [busqueda, setBusqueda] = useState('');
  const [favoritos, setFavoritos] = useState<Record<string, boolean>>({});
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(
    null
  );
  const [modalVisible, setModalVisible] = useState(false);

  const productosFiltrados = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();
    if (!texto) return PRODUCTOS;
    return PRODUCTOS.filter((producto) =>
      producto.titulo.toLowerCase().includes(texto)
    );
  }, [busqueda]);

  const abrirDetalle = (producto: Producto) => {
    setProductoSeleccionado(producto);
    setModalVisible(true);
  };

  const alternarFavorito = (id: string) => {
    setFavoritos((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Galería</Text>

      <TextInput
        style={styles.buscador}
        placeholder="Buscar por título..."
        value={busqueda}
        onChangeText={setBusqueda}
        autoCorrect={false}
      />

      <FlatList
        data={productosFiltrados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <ProductoItem
            producto={item}
            esFavorito={!!favoritos[item.id]}
            onPress={() => abrirDetalle(item)}
            onLongPress={() => alternarFavorito(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.vacio}>No se encontraron productos.</Text>
        }
      />

      <DetalleProductoModal
        producto={productoSeleccionado}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 12,
  },
  buscador: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 14,
  },
  lista: {
    paddingBottom: 24,
  },
  vacio: {
    textAlign: 'center',
    color: '#94a3b8',
    marginTop: 40,
    fontSize: 15,
  },
});
