export interface Personaje {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
}

export interface InfoPagina {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface RespuestaApi {
    info: InfoPagina;
    results: Personaje[];
}