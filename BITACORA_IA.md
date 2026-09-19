# Bitácora de uso de Inteligencia Artificial

## Proyecto: Catálogo Rick & Morty

Esta bitácora documenta el uso de herramientas de Inteligencia Artificial durante el desarrollo del proyecto. La IA fue utilizada como herramienta de apoyo para resolver dudas, comprender conceptos, identificar errores y orientar la implementación de diferentes funcionalidades.

| Fecha | Actividad | Uso de IA | Herramienta | Resultado |
|---|---|---|---|---|
| Septiembre 2026 | Configuración del proyecto | Orientación para crear y configurar el proyecto utilizando React, TypeScript y Vite. | ChatGPT | Se configuró correctamente el entorno de desarrollo. |
| Septiembre 2026 | Organización del proyecto | Apoyo para organizar componentes, servicios, tipos y estilos dentro de `src`. | ChatGPT | Se obtuvo una estructura modular y organizada. |
| Septiembre 2026 | Consumo de API | Orientación para realizar peticiones a la API de Rick and Morty y procesar las respuestas. | ChatGPT | Se logró consultar y mostrar los personajes en el catálogo. |
| Septiembre 2026 | Implementación del buscador | Explicación para implementar la búsqueda de personajes y controlar las consultas realizadas mientras el usuario escribe. | ChatGPT | Se implementó un buscador con espera de 400 ms antes de ejecutar la consulta. |
| Septiembre 2026 | Manejo de estados | Explicación del uso de `useState` y `useEffect` para manejar personajes, búsqueda, carga y errores. | ChatGPT | Se comprendió y aplicó el manejo de estados y efectos en React. |
| Septiembre 2026 | Detalle de personajes | Orientación para crear un componente que permitiera seleccionar un personaje y visualizar su información detallada. | ChatGPT | Se implementó la opción `Ver ficha` y el regreso al catálogo. |
| Septiembre 2026 | Sistema de favoritos | Apoyo para implementar el marcado y desmarcado de personajes favoritos. | ChatGPT | Se implementó correctamente la funcionalidad de favoritos. |
| Septiembre 2026 | Persistencia de favoritos | Explicación sobre el funcionamiento de `localStorage` para guardar información en el navegador. | ChatGPT | Los favoritos permanecen almacenados después de recargar la página. |
| Septiembre 2026 | Contador de favoritos | Orientación para relacionar el contador con el estado de favoritos. | ChatGPT | El contador se actualiza automáticamente al agregar o eliminar favoritos. |
| Septiembre 2026 | Diseño de tarjetas | Apoyo para reorganizar los estilos CSS de las tarjetas de personajes. | ChatGPT | Se mejoró la presentación visual del catálogo. |
| Septiembre 2026 | Rediseño de interfaz | Orientación para reorganizar encabezado, buscador, contador y distribución del catálogo. | ChatGPT | Se obtuvo una interfaz más organizada y adaptable a diferentes tamaños de pantalla. |
| Septiembre 2026 | Corrección de errores | Análisis de capturas de pantalla y fragmentos de código para identificar posibles errores. | ChatGPT | Se solucionaron diferentes problemas encontrados durante el desarrollo. |
| Septiembre 2026 | Control de versiones | Orientación sobre el uso de ramas, commits y Pull Requests con GitHub Desktop y GitHub. | ChatGPT | Se aplicó un flujo de trabajo basado en ramas y posterior integración en `develop`. |
| Septiembre 2026 | Gestión de requisitos | Apoyo para redactar Issues y documentar los requisitos desarrollados. | ChatGPT | Las funcionalidades quedaron documentadas dentro del repositorio. |
| 18 septiembre 2026 | Integración del rediseño | Orientación para publicar la rama y realizar un Pull Request hacia `develop`. | ChatGPT | El rediseño fue integrado mediante el Pull Request #9. |
| 18 septiembre 2026 | Sincronización del repositorio | Explicación del proceso de actualización de la rama local después de realizar un merge. | ChatGPT | La rama local `develop` quedó sincronizada con el repositorio remoto. |

## Reflexión sobre el uso de IA

Durante el desarrollo del proyecto, la Inteligencia Artificial fue utilizada principalmente como una herramienta de apoyo y orientación técnica.

Su uso permitió aclarar conceptos relacionados con React, TypeScript, consumo de APIs, manejo de estados, `localStorage`, CSS y control de versiones con Git y GitHub.

También fue utilizada para analizar errores a partir de fragmentos de código y capturas de pantalla, proporcionando posibles soluciones y explicaciones sobre los pasos necesarios para corregirlos.

Las respuestas proporcionadas por la IA fueron revisadas, implementadas y probadas dentro del proyecto. Cuando fue necesario, se realizaron modificaciones para adaptarlas a los requerimientos y estructura de la aplicación.

Por esta razón, el uso de Inteligencia Artificial no se limitó únicamente a la generación de código, sino que también se utilizó como apoyo durante el proceso de aprendizaje, análisis y solución de problemas.

## Herramientas de IA utilizadas

- ChatGPT.
- Asistencia mediante análisis de código.
- Análisis de capturas de pantalla.
- Generación y explicación de ejemplos de código.
- Orientación para el uso de Git y GitHub.

## Conclusión

La utilización de Inteligencia Artificial facilitó el desarrollo del proyecto al permitir resolver dudas técnicas, comprender conceptos y encontrar soluciones a diferentes problemas.

Cada recomendación generada por la IA fue revisada y validada mediante pruebas en la aplicación antes de ser integrada al proyecto.

# Declaración de Uso de IA

| Fecha | Integrante | Herramienta | Consulta | Uso de la respuesta |
| :--- | :--- | :--- | :--- | :--- |
| 2026-09-16 | Ximena Jaramillo | Gemini | Extraer y organizar los requerimientos técnicos y funcionales del PDF de evaluación del taller. | Identificar los criterios de aceptación para planear los issues y la estructura del proyecto en GitHub. |
| 2026-09-17 | Ximena Jaramillo | Gemini | Consultar ideas de diseño visual y estructura (mockups) para la presentación de los personajes. | Tomar inspiración de la estructura sugerida para escribir manualmente las clases en `Catalogo.module.css`. |
| 2026-09-18 | Ximena Jaramillo | Gemini | Explicación de un error de tipado (Type error) de TypeScript al momento de mapear la respuesta de la API. | Entender el origen del conflicto de tipos para poder corregir manualmente la interfaz en `types/api.ts`. |
| 2026-09-19 | Ximena Jaramillo | Gemini | Guía conceptual para diagnosticar por qué una imagen de cursor personalizado no se reflejaba usando CSS Modules. | Entender el encapsulamiento de React y la regla `:global` para aplicar el cursor por mi cuenta, sin copiar código directo. |
| 2026-09-19 | Ximena Jaramillo | Gemini | Revisar estructura y sugerencia de redacción técnica para el documento final de presentación. | Utilizar la base redactada para construir el archivo `README.md` adaptado a las rutas y detalles de nuestro repositorio. |

*Nota: Todas las consultas de código realizadas a la IA se limitaron a la comprensión de errores y conceptos arquitectónicos. El código final fue escrito, adaptado y estructurado manualmente por los integrantes del equipo.*