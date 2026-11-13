import { Mutex } from "./Mutex.js";
import { esperar } from "./utilidades.js";

export class VueloCarga {
    #capacidadDisponibleKg: number;
    private readonly mutex = new Mutex(); // Encapsula la sincronización

    constructor(public readonly codigo: string, capacidadKg: number) {
        this.#capacidadDisponibleKg = capacidadKg;
    }

    public reservar(pesoKg: number): Promise<boolean> {
        return this.mutex.ejecutarExclusivo(async () => {
            if (this.#capacidadDisponibleKg < pesoKg) return false;
            await esperar(100); // Simula validación externa
            this.#capacidadDisponibleKg -= pesoKg; // Sección crítica protegida
            return true;
        });
    }

    public obtenerCapacidadDisponible(): number {
        return this.#capacidadDisponibleKg;
    }
}

