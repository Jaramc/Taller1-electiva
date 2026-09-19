¿Qué intenté primero y por qué no funcionó?
Al principio, pegué la estructura del encabezado nuevo y el botón de favoritos directamente en App.tsx. El problema fue que no borré el código del diseño anterior en el return, entonces chocaron. Además, intenté guardar los datos de la API de una vez en el estado, pero me enredé definiendo la estructura correcta de los datos.

¿Qué error o comportamiento inesperado obtuve (mensaje exacto)?
Por el lado visual, la interfaz salía duplicada (mostraba el título viejo y abajo el nuevo). Pero el error que más tiempo me tomó resolver fue un "Type error" de TypeScript en la terminal. El compilador me marcaba error porque las propiedades que le puse a mi interfaz de Personaje no cuadraban exactamente con el JSON real que devuelve la API. También noté que la petición se quedaba colgada si el componente cambiaba rápido.

¿Qué decidí finalmente y qué alternativa descarté?
Me tocó limpiar por completo el return de App.tsx para dejar solo el diseño nuevo, y corregir a mano los tipos en types/api.ts para que coincidieran perfecto con la API y quitar el error. También metí el AbortController en el useEffect para cancelar la petición de forma segura. Descarté la idea de separar el encabezado en un archivo distinto por ahora, para no complicarme pasando el contador de favoritos por props.