import type { RespuestaApi } from "../types/api";

export async function getCharacters(
  nombre: string = "",
  signal?: AbortSignal
): Promise<RespuestaApi> {

  const url = nombre
    ? `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(nombre)}`
    : "https://rickandmortyapi.com/api/character";

  const response = await fetch(url, {
    signal
  });

  if (!response.ok) {
    if (response.status === 404) {
      return {
        info: {
          count: 0,
          pages: 0,
          next: null,
          prev: null
        },
        results: []
      };
    }

    throw new Error(
      "Hubo un error al tratar de traer los personajes"
    );
  }

  const datos: RespuestaApi = await response.json();

  return datos;
}