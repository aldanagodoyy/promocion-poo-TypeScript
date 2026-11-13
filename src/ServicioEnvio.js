// CLASE BASE ABSTRACTA Y ENCAPSULAMIENTO
// Es la clase base abstracta de la jerarquia de envios
// Guarda atributos y comportamientos comunes a todos los tipos de envios
export class ServicioEnvio {
    // Encapsulamiento estricto en runtime (inaccesible desde el exterior)
    #codigoRastreo;
    // Modificador de visibilidad estático de TypeScript
    destino;
    costoBase;
    constructor(destino, costoBase) {
        this.destino = destino;
        this.costoBase = costoBase;
        this.#codigoRastreo = `LOG-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    }
    getCodigoRastreo() {
        return this.#codigoRastreo;
    }
    obtenerUbicacionActual() {
        return `Envío [${this.#codigoRastreo}] en tránsito hacia: ${this.destino}`;
    }
}
