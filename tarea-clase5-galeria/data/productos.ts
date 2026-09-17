export type Producto = {
  id: string;
  titulo: string;
  precio: number;
  descripcion: string;
  // `imagen` es un require(...) local, o `imagenUri` es una URL remota.
  imagen?: number;
  imagenUri?: string;
};

export const PRODUCTOS: Producto[] = [
  {
    id: '1',
    titulo: 'Mochila Urbana',
    precio: 45990,
    descripcion:
      'Mochila resistente al agua, con compartimento acolchado para notebook y bolsillos organizadores.',
    imagen: require('../assets/products/producto-local.png'),
  },
  {
    id: '2',
    titulo: 'Zapatillas Running',
    precio: 62990,
    descripcion:
      'Zapatillas livianas con amortiguación de alto rebote, ideales para entrenar largas distancias.',
    imagenUri: 'https://picsum.photos/id/21/600/600',
  },
  {
    id: '3',
    titulo: 'Auriculares Bluetooth',
    precio: 38990,
    descripcion:
      'Auriculares inalámbricos con cancelación de ruido activa y hasta 24hs de batería.',
    imagenUri: 'https://picsum.photos/id/60/600/600',
  },
  {
    id: '4',
    titulo: 'Campera Rompeviento',
    precio: 51990,
    descripcion:
      'Campera impermeable y plegable, perfecta para llevar siempre en la mochila.',
    imagenUri: 'https://picsum.photos/id/103/600/600',
  },
  {
    id: '5',
    titulo: 'Reloj Deportivo',
    precio: 89990,
    descripcion:
      'Reloj inteligente con GPS, monitor de frecuencia cardíaca y resistencia al agua.',
    imagenUri: 'https://picsum.photos/id/119/600/600',
  },
  {
    id: '6',
    titulo: 'Botella Térmica',
    precio: 15990,
    descripcion:
      'Botella de acero inoxidable que mantiene la temperatura hasta 12 horas.',
    imagenUri: 'https://picsum.photos/id/225/600/600',
  },
  {
    id: '7',
    titulo: 'Lentes de Sol',
    precio: 27990,
    descripcion: 'Lentes de sol con protección UV400 y marco liviano de policarbonato.',
    imagenUri: 'https://picsum.photos/id/250/600/600',
  },
];
