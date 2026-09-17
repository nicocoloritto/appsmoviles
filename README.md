# Apps Móviles — UCA

Entregas de la materia Apps Móviles, hechas con [Expo](https://expo.dev) + [expo-router](https://docs.expo.dev/router/introduction/) y TypeScript.

## Proyectos

### 📁 [tarea-clase4](./tarea-clase4)

App con navegación por tabs (`expo-router`, `<Tabs>`, `<Stack>`, `<TextInput>`):

- **Contador**: botón que incrementa un contador (`useState`).
- **Tarjetas**: lista de tarjetas reutilizables que reciben su texto por `props`; al tocarlas cambian de color de fondo y de texto (`useState`, `<Pressable>`).
- **Perfil**: muestra nombre y apellido, con un botón "Cambiar nombre" que abre un `<Modal>` con `<TextInput>` para editarlo.

### 📁 [tarea-clase5-galeria](./tarea-clase5-galeria)

Pantalla **Galería** de productos usando componentes core de React Native (`<View>`, `<Text>`, `<Image>`, `<TextInput>`, `<Pressable>`, `<Modal>`, `<FlatList>`):

- Lista de productos con `<FlatList>` (imagen, título y precio).
- `<TextInput>` para filtrar por título en tiempo real.
- Al tocar un producto se abre un `<Modal>` con el detalle (imagen grande, título, descripción) y botones para cambiar el `resizeMode` de la imagen (`cover`, `contain`, `stretch`).
- Al mantener presionado un producto, se marca/desmarca como favorito.
- Usa una imagen local con `require(...)` y varias imágenes remotas por URI.

## Cómo correr cada proyecto

```bash
cd tarea-clase4          # o tarea-clase5-galeria
npm install
npm start
```

Luego escaneá el QR con la app **Expo Go**, o presioná `w` para abrirlo en el navegador.
