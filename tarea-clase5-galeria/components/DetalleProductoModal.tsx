import { useState } from 'react';
import {
  Image,
  ImageResizeMode,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Producto } from '../data/productos';

type DetalleProductoModalProps = {
  producto: Producto | null;
  visible: boolean;
  onClose: () => void;
};

const MODOS: ImageResizeMode[] = ['cover', 'contain', 'stretch'];

export default function DetalleProductoModal({
  producto,
  visible,
  onClose,
}: DetalleProductoModalProps) {
  const [resizeMode, setResizeMode] = useState<ImageResizeMode>('cover');

  if (!producto) return null;

  const fuente = producto.imagen ?? { uri: producto.imagenUri };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.contenido}>
          <ScrollView>
            <View style={styles.imagenContenedor}>
              <Image source={fuente} style={styles.imagen} resizeMode={resizeMode} />
            </View>

            <View style={styles.selectorModos}>
              {MODOS.map((modo) => (
                <Pressable
                  key={modo}
                  onPress={() => setResizeMode(modo)}
                  style={[
                    styles.botonModo,
                    resizeMode === modo && styles.botonModoActivo,
                  ]}
                >
                  <Text
                    style={[
                      styles.textoModo,
                      resizeMode === modo && styles.textoModoActivo,
                    ]}
                  >
                    {modo}
                  </Text>
                </Pressable>
              ))}
            </View>

            <Text style={styles.titulo}>{producto.titulo}</Text>
            <Text style={styles.precio}>${producto.precio.toLocaleString('es-AR')}</Text>
            <Text style={styles.descripcion}>{producto.descripcion}</Text>
          </ScrollView>

          <Pressable style={styles.botonCerrar} onPress={onClose}>
            <Text style={styles.textoBotonCerrar}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  contenido: {
    maxHeight: '85%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  imagenContenedor: {
    width: '100%',
    height: 260,
    backgroundColor: '#f1f5f9',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 14,
  },
  imagen: {
    width: '100%',
    height: '100%',
  },
  selectorModos: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  botonModo: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    alignItems: 'center',
  },
  botonModoActivo: {
    backgroundColor: '#4f46e5',
    borderColor: '#4f46e5',
  },
  textoModo: {
    color: '#475569',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  textoModoActivo: {
    color: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  precio: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4f46e5',
    marginBottom: 12,
  },
  descripcion: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 16,
  },
  botonCerrar: {
    backgroundColor: '#1e293b',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotonCerrar: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
