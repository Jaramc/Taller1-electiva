import styles from "../styles/Catalogo.module.css";
import type { Personaje } from "../types/api";

interface Props {
  personaje: Personaje;
  alSeleccionar: (personaje: Personaje) => void;
  esFavorito: boolean;
  alAlternarFavorito: (id: number) => void;
}

export function TarjetaElemento({
  personaje,
  alSeleccionar,
  esFavorito,
  alAlternarFavorito,
}: Props) {
  return (
    <article className={styles.card}>
      <img
        src={personaje.image}
        alt={personaje.name}
        className={styles.imagen}
      />

      <button
        className={styles.botonFavorito}
        onClick={() => alAlternarFavorito(personaje.id)}
        title={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        {esFavorito ? "★" : "☆"}
      </button>

      <div className={styles.info}>
        <h2 className={styles.nombre}>{personaje.name}</h2>

        <p className={styles.textoSecundario}>{personaje.species}</p>

        <div className={styles.accionesTarjeta}>
          <span className={styles.pildoraEstado}>{personaje.status}</span>

          <button
            className={styles.botonDetalle}
            onClick={() => alSeleccionar(personaje)}
          >
            Ver ficha
          </button>
        </div>
      </div>
    </article>
  );
}
