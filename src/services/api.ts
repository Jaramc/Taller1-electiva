import { RespuestaApi } from "../types/api";

export async function getCharacters(): Promise<RespuestaApi> {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
        throw new Error("Hubo un error al tratar de traer los personajes");
    }
    const datos: RespuestaApi = await response.json();
    return datos;
}