
// CLASE BASE ABSTRACTA Y ENCAPSULAMIENTO
// Es la clase base abstracta de la jerarquia de envios
// Guarda atributos y comportamientos comunes a todos los tipos de envios

import { IRastreable } from "./interfaces.js";

export abstract class ServicioEnvio implements IRastreable {
    // Encapsulamiento estricto en runtime (inaccesible desde el exterior)
    #codigoRastreo: string;
    
    // Modificador de visibilidad estático de TypeScript
    protected destino: string;
    protected costoBase: number;

    constructor(destino: string, costoBase: number) {
        this.destino = destino;
        this.costoBase = costoBase;
        this.#codigoRastreo = `LOG-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    }

    public getCodigoRastreo(): string {
        return this.#codigoRastreo;
    }

    // Método abstracto que fuerza polimorfismo dinámico en las subclases
    public abstract procesarDespacho(): boolean;
    public abstract procesarDespachoAsync(): Promise<boolean>;

    public obtenerUbicacionActual(): string {
        return `Envío [${this.#codigoRastreo}] en tránsito hacia: ${this.destino}`;
    }
}
