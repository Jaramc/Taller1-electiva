export interface Personaje {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
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