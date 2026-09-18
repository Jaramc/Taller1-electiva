import { useState, useEffect } from 'react';

import type { Personaje } from './types/api';
import { getCharacters } from './services/api';
import { TarjetaElemento } from './components/TarjetaElemento';
import { BarraBusqueda } from './components/BarraBusqueda'; // <- Importamos la nueva barra
import styles from './styles/Catalogo.module.css';

export default function App() {
  const [personajes, setPersonajes] = useState<Personaje[]>([]);
  
  const [textoBusqueda, setTextoBusqueda] = useState(""); // Lo que el usuario va escribiendo letra por letra
  const [terminoFinal, setTerminoFinal] = useState(""); // Lo que queda después de esperar 400ms

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setTerminoFinal(textoBusqueda);
    }, 400);

    return () => clearTimeout(temporizador);
  }, [textoBusqueda]);

  useEffect(() => {
    async function cargarDatos() {
      try {
        const datos = await getCharacters(terminoFinal);
        setPersonajes(datos.results);
      } catch (error) {
        console.error("Hubo un problema cargando los datos", error);
      }
    }

    cargarDatos();
  }, [terminoFinal]); 


import { Personaje } from './types/api';
import { getCharacters } from './services/api';
import { TarjetaElemento } from './components/TarjetaElemento';

import styles from './styles/Catalogo.module.css';

export default function App() {

  const [personajes, setPersonajes] = useState<Personaje[]>([]);

  useEffect(() => {

    async function cargarDatos() {
      try {
        const datos = await getCharacters();

        setPersonajes(datos.results);
      } catch (error) {
        console.error("Hubo un problema cargando los datos", error);
      }
    }


    cargarDatos();
  }, []); 


  return (
    <main className={styles.contenedor}>
      <h1 className={styles.titulo}>Catálogo Rick & Morty</h1>
      

      { }
      <BarraBusqueda 
        valor={textoBusqueda} 
        alCambiar={setTextoBusqueda} 
      />
      
      <div className={styles.grid}>
        {}
        {personajes.length > 0 ? (
          personajes.map((personaje) => (
            <TarjetaElemento 
              key={personaje.id} 
              personaje={personaje} 
            />
          ))
        ) : (
          <p style={{ color: '#8e8e93', fontSize: '1.1rem' }}>No se encontraron especímenes.</p>
        )}

      {}
      <div className={styles.grid}>
        {}
        {personajes.map((personaje) => (
          <TarjetaElemento 
            key={personaje.id} 
            personaje={personaje} 
          />
        ))}
      </div>
    </main>
  );
}