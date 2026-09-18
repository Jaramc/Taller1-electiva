import styles from '../styles/Catalogo.module.css';

interface Props {
  valor: string;
  alCambiar: (nuevoTexto: string) => void;
}

export function BarraBusqueda({ valor, alCambiar }: Props) {
  return (
    // Envolvemos todo en un div para poder posicionar el ícono flotando sobre el input
    <div className={styles.contenedorBusqueda}>
      
      {/* Ícono de lupa en código SVG puro */}
      <svg 
        className={styles.iconoBusqueda} 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>

      <input 
        type="text" 
        // Ya le quitamos el emoji de aquí
        placeholder="Buscar espécimen..." 
        className={styles.inputBusqueda}
        value={valor}
        onChange={(evento) => alCambiar(evento.target.value)}
      />
    </div>
  );
}