
// ABSTRACCIÓN Y SEGREGACIÓN DE INTERFACES (ISP)
//Contratos estrictos que otras clases deben cumplir, no implementa logica. 

export interface DimensionesPaquete { //--> tipo de datos estructuras para almacenar valores
    readonly altoCm: number;
    readonly anchoCm: number;
    readonly largoCm: number;
    readonly pesoKg: number;
}

export interface ICalculadorTarifa {
    calcularCosto(dimensiones: DimensionesPaquete, distanciaKm: number): number;
    obtenerTipoTransporte(): string;
}

export interface IRastreable {
    obtenerUbicacionActual(): string;
}

export interface TareaCalculo {
    tipo: "terrestre" | "aereo";
    cantidad: number;
    distanciaKm: number;
    contador: SharedArrayBuffer;
}