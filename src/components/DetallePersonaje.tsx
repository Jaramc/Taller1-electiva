import type { Personaje } from "../types/api";
import styles from "../styles/Catalogo.module.css";

interface Props {
  personaje: Personaje;
  alVolver: () => void;
}

export function DetallePersonaje({ personaje, alVolver }: Props) {
  return (
    <section className={styles.detalle}>
      <button
        className={styles.botonVolver}
        onClick={alVolver}
      >
        ← Volver al catálogo
      </button>

      <img
        src={personaje.image}
        alt={personaje.name}
        className={styles.imagenDetalle}
      />

      <h2>{personaje.name}</h2>

      <p><strong>Estado:</strong> {personaje.status}</p>
      <p><strong>Especie:</strong> {personaje.species}</p>
      <p><strong>Género:</strong> {personaje.gender}</p>
      <p><strong>Origen:</strong> {personaje.origin.name}</p>
      <p><strong>Ubicación:</strong> {personaje.location.name}</p>
    </section>
  );
}