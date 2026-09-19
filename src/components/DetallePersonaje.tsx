import type { Personaje } from '../types/api';
import styles from '../styles/Catalogo.module.css';

interface Props {
  personaje: Personaje;
  alVolver: () => void;
}

export function DetallePersonaje({ personaje, alVolver }: Props) {
  return (
    /* El div overlay cubre toda la pantalla y cierra el modal si haces clic por fuera */
    <div className={styles.overlay} onClick={alVolver}>
      {/* El stopPropagation evita que al hacer clic dentro de la tarjeta blanca se cierre el modal */}
      <div className={styles.modalFicha} onClick={(e) => e.stopPropagation()}>
        
        <div className={styles.avatarContenedor}>
          <img src={personaje.image} alt={personaje.name} className={styles.avatarFlotante} />
        </div>
        
        <div className={styles.listaDatos}>
          <div className={styles.filaDato}>
            <span className={styles.etiqueta}>Name</span>
            <span className={styles.valor}>{personaje.name}</span>
          </div>
          <div className={styles.filaDato}>
            <span className={styles.etiqueta}>Character</span>
            <span className={styles.valor}>{personaje.status}</span>
          </div>
          <div className={styles.filaDato}>
            <span className={styles.etiqueta}>Species</span>
            <span className={styles.valor}>{personaje.species}</span>
          </div>
        </div>

        <button onClick={alVolver} className={styles.botonActionBody}>
          Action Body
        </button>
      </div>
    </div>
  );
}