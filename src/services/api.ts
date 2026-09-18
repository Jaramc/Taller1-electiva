import type { RespuestaApi } from "../types/api";

export async function getCharacters(nombre: string = ""): Promise<RespuestaApi> {
    
    const url = nombre 
        ? `https://rickandmortyapi.com/api/character/?name=${nombre}`
        : "https://rickandmortyapi.com/api/character";

    const response = await fetch(url);
    
    if (!response.ok) {
        if (response.status === 404) {
            return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] };
        }
        throw new Error("Hubo un error al tratar de traer los personajes");
    }
    

import { RespuestaApi } from "../types/api";

export async function getCharacters(): Promise<RespuestaApi> {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
        throw new Error("Hubo un error al tratar de traer los personajes");
    }
    const datos: RespuestaApi = await response.json();
    return datos;
}