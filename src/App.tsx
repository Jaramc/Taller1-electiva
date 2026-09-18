import { useEffect, useState } from "react";

import type { Personaje } from "./types/api";
import { getCharacters } from "./services/api";
import { TarjetaElemento } from "./components/TarjetaElemento";
import { BarraBusqueda } from "./components/BarraBusqueda";
import styles from "./styles/Catalogo.module.css";
import { DetallePersonaje } from "./components/DetallePersonaje";

export default function App() {
  const [personajes, setPersonajes] = useState<Personaje[]>([]);

  const [personajeSeleccionado, setPersonajeSeleccionado] =
    useState<Personaje | null>(null);

  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [terminoFinal, setTerminoFinal] = useState("");

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  // Espera 400 ms después de que el usuario deja de escribir
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setTerminoFinal(textoBusqueda);
    }, 400);

    return () => clearTimeout(temporizador);
  }, [textoBusqueda]);

  // Consulta los personajes
  useEffect(() => {
    async function cargarDatos() {
      try {
        setCargando(true);
        setError("");

        const datos = await getCharacters(terminoFinal);

        setPersonajes(datos.results);
      } catch (error) {
        console.error("Hubo un problema cargando los datos", error);

        setError("No fue posible cargar los personajes");
        setPersonajes([]);
      } finally {
        setCargando(false);
      }
    }

    cargarDatos();
  }, [terminoFinal]);

  if (personajeSeleccionado) {
    return (
      <main className={styles.contenedor}>
        <DetallePersonaje
          personaje={personajeSeleccionado}
          alVolver={() => setPersonajeSeleccionado(null)}
        />
      </main>
    );
  }
  return (
    <main className={styles.contenedor}>
      <h1 className={styles.titulo}>Catálogo Rick & Morty</h1>

      <BarraBusqueda valor={textoBusqueda} alCambiar={setTextoBusqueda} />

      <div className={styles.grid}>
        {cargando ? (
          <p>Cargando personajes...</p>
        ) : error ? (
          <p>{error}</p>
        ) : personajes.length > 0 ? (
          personajes.map((personaje) => (
            <TarjetaElemento
              key={personaje.id}
              personaje={personaje}
              alSeleccionar={setPersonajeSeleccionado}
            />
          ))
        ) : (
          <p>No se encontraron especímenes.</p>
        )}
      </div>
    </main>
  );
}
