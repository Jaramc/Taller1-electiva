# Catálogo Rick & Morty - Taller React API

Aplicación web desarrollada en React y TypeScript que consume la API pública de Rick & Morty. El proyecto implementa una interfaz tipada, tolerante a errores y con manejo de estados, cumpliendo con los requerimientos funcionales y técnicos del taller de Electiva.

## 🚀 Instalación y Ejecución

Sigue estos pasos para levantar el proyecto en tu entorno local desde cero:

1. **Clonar el repositorio**
   \`\`\`bash
   git clone https://github.com/Jaramc/Taller1-electiva.git
   cd Taller1-electiva
   \`\`\`

2. **Instalar las dependencias**
   Asegúrate de tener Node.js instalado. Luego ejecuta:
   \`\`\`bash
   npm install
   \`\`\`

3. **Ejecutar el entorno de desarrollo**
   \`\`\`bash
   npm run dev
   \`\`\`
   El servidor se iniciará (usualmente en `http://localhost:5173`).

4. **Compilar para producción (Verificación)**
   Para comprobar que no existen errores de TypeScript ni advertencias antes de entregar:
   \`\`\`bash
   npm run build
   \`\`\`

## 🛠️ Tecnologías y Reglas Técnicas Aplicadas

* **Core:** React 18 con TypeScript, inicializado mediante Vite (`react-ts`).
* **Estilos:** CSS Modules puros (`.module.css`), garantizando un diseño responsivo sin frameworks externos.
* **Peticiones HTTP:** Uso de `fetch` nativo validando `response.ok`.
* **Cancelación de Peticiones:** Integración obligatoria de `AbortController` en la función de limpieza del `useEffect` principal.
* **Tipado:** Interfaces estrictas generadas a mano basadas en las respuestas JSON de la API. No se utiliza `any` ni `@ts-ignore`.
* **Búsqueda (RF-03):** Retardo de 400ms implementado manualmente con `setTimeout` y `clearTimeout`, sin usar librerías externas de debounce.

## 📋 Requerimientos Funcionales Implementados

* **RF-01 (Listado):** Renderizado en grilla de más de 20 personajes con información clave (nombre, estado, especie).
* **RF-02 (Estados):** Manejo visual de estados: *Cargando*, *Error*, *Sin resultados* y *Éxito*.
* **RF-03 (Búsqueda):** Input controlado con filtrado reactivo y retardo optimizado.
* **RF-04 (Detalle):** Vista en detalle interactiva (modal) para cada personaje seleccionado.
* **RF-05 (Favoritos):** Sistema de marcaje con persistencia de datos en `localStorage`.
* **RF-06 (Reintento):** Botón de recuperación de conexión que reejecuta la petición de forma limpia sin recargar el navegador.

## 👥 Equipo de Desarrollo

* **Ximena Jaramillo Cárdenas** - [Describe brevemente tu rol/issue asignado]
* **Fredy Osorio** - [Describe brevemente su rol/issue asignado]
