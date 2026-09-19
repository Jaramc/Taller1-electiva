import styles from '../styles/Catalogo.module.css';
import type { Personaje } from '../types/api';

interface Props {
  personaje: Personaje;
}

export function TarjetaElemento({ personaje }: Props) {
  return (
    <article className={styles.card}>
      <img 
        src={personaje.image} 
        alt={personaje.name} 
        className={styles.imagen} 
      />
      
      <div className={styles.info}>
        <h2 className={styles.nombre}>{personaje.name}</h2>
        
        <div>
          <span className={styles.pildoraEstado}>
            {personaje.status}
          </span>
        </div>
        
        <p className={styles.textoSecundario}>
          Especie: {personaje.species}
        </p>

        <button className={styles.botonDetalle}>
          Inspeccionar Ficha
        </button>
      </div>
    </article>
  );
}