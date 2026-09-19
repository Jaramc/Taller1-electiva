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

  const [favoritos, setFavoritos] = useState<number[]>(() => {
    const favoritosGuardados = localStorage.getItem("favoritos");

    return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
  });

  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [terminoFinal, setTerminoFinal] = useState("");

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const alternarFavorito = (id: number) => {
    setFavoritos((favoritosActuales) => {
      if (favoritosActuales.includes(id)) {
        return favoritosActuales.filter((favoritoId) => favoritoId !== id);
      }

      return [...favoritosActuales, id];
    });
  };
  //Guarda los favoritos en el localStorage
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

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
      <div className={styles.encabezado}>
        <h1 className={styles.logo}>RICK & MORTY</h1>

        <div className={styles.buscadorEncabezado}>
          <BarraBusqueda valor={textoBusqueda} alCambiar={setTextoBusqueda} />
        </div>

        <div className={styles.favoritosEncabezado}>★ {favoritos.length}</div>
      </div>

      <div className={styles.seccionCatalogo}>
        <div className={styles.tituloCatalogo}>
          <span>RICK AND</span>
          <span>MORTY</span>
          <span>CATALOG</span>
        </div>

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
                esFavorito={favoritos.includes(personaje.id)}
                alAlternarFavorito={alternarFavorito}
              />
            ))
          ) : (
            <p>No se encontraron especímenes.</p>
          )}
        </div>
      </div>
    </main>
  );
}
