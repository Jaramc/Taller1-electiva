import { useState, useEffect } from 'react';

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