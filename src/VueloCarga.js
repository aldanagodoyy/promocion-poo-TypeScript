import { Mutex } from "./Mutex.js";
import { esperar } from "./utilidades.js";
export class VueloCarga {
    codigo;
    #capacidadDisponibleKg;
    mutex = new Mutex(); // Encapsula la sincronización
    constructor(codigo, capacidadKg) {
        this.codigo = codigo;
        this.#capacidadDisponibleKg = capacidadKg;
    }
    reservar(pesoKg) {
        return this.mutex.ejecutarExclusivo(async () => {
            if (this.#capacidadDisponibleKg < pesoKg)
                return false;
            await esperar(100); // Simula validación externa
            this.#capacidadDisponibleKg -= pesoKg; // Sección crítica protegida
            return true;
        });
    }
    obtenerCapacidadDisponible() {
        return this.#capacidadDisponibleKg;
    }
}
