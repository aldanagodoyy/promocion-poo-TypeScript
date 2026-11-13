
// Estrategia 2: envio por via aérea con tarifas y prioridades diferentes a las de terrestre. 

import { ServicioEnvio } from "./ServicioEnvio.js";
import { ICalculadorTarifa, DimensionesPaquete } from "./Interfaces.js";
import { esperar } from "./utilidades.js";

export class EnvioAereo extends ServicioEnvio implements ICalculadorTarifa {
    private vueloAsignado: string;

    constructor(destino: string, vueloAsignado: string) {
        super(destino, 5000);
        this.vueloAsignado = vueloAsignado;
    }

    public calcularCosto(dimensiones: DimensionesPaquete, distanciaKm: number): number {
        return this.costoBase + (dimensiones.pesoKg * 350) + (distanciaKm * 85);
    }

    public procesarDespacho(): boolean {
        console.log(`[Carga Aérea] Paquete cargado en vuelo ${this.vueloAsignado} con destino a ${this.destino}.`);
        return true;
    }

    public async procesarDespachoAsync(): Promise<boolean> {
        console.log(`[Carga Aérea] Confirmando vuelo ${this.vueloAsignado}...`);
        await esperar(1200);
        return this.procesarDespacho();
    }

    public obtenerTipoTransporte(): string {
        return `Aéreo Express (Vuelo: ${this.vueloAsignado})`;
    }
}

