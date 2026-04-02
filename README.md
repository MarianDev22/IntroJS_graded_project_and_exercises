# Intro JavaScript - Ejercicios 📝

Ejercicios del módulo de introducción a JavaScript. No requieren instalación ni dependencias externas.

---

## Ejercicios


- `ejercicio1.js` Objeto usuario con datos del bootcamp. Acceso a propiedades anidadas. 
- `bug.js`  Corrección de bug en cálculo de promedio (índice fuera de rango en bucle `for`). 
- `ejercicio3.js` Tres funciones deducidas a partir de ejemplos: construcción de rutas, separación de dígitos e inversión de cadenas.
- `transform.js` Filtrado y transformación de arrays con `filter` y `map`. Sin uso de `for` ni `while`.
- `bugAsync.js` Corrección de bug de asincronía: `setTimeout` con callback que retorna el usuario correctamente.
- `playlist/js/playlist.js` Gestión de estado de una playlist usando cierres (closures).

---

## Ejercicio 6 - Playlist (nota sobre la corrección) 🎵

La primera entrega fue calificada como **no apta** porque los métodos `addSongToPlaylist` y `removeSongFromPlaylist` usaban `find` para modificar directamente el objeto encontrado, **mutando el estado original** en lugar de generar uno nuevo.

En la versión corregida se reemplazó ese patrón por **`map` + spread operator**, de forma que cada operación devuelve un nuevo array sin modificar el anterior:

```javascript
// ❌ Antes: mutación directa
const playlist = playlists.find(p => p.name === playlistName);
playlist.songs.push(song); // modifica el objeto original

// ✅ Ahora: sin mutaciones
playlists = playlists.map((playlist) => {
  if (playlistName !== playlist.name) return playlist;
  return { ...playlist, songs: [...playlist.songs, song] };
});
```

> ⚠️ El método `sortSongs` quedó pendiente de corrección: actualmente no evita la mutación del array original ni reasigna `playlists` con el resultado del sort.

---

## Construido con 🛠️

- JavaScript vanilla — sin librerías externas
