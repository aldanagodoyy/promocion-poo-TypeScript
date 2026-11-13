// Estrategia 2: envio por via aérea con tarifas y prioridades diferentes a las de terrestre. 
import { ServicioEnvio } from "./ServicioEnvio.js";
import { esperar } from "./utilidades.js";
export class EnvioAereo extends ServicioEnvio {
    vueloAsignado;
    constructor(destino, vueloAsignado) {
        super(destino, 5000);
        this.vueloAsignado = vueloAsignado;
    }
    calcularCosto(dimensiones, distanciaKm) {
        return this.costoBase + (dimensiones.pesoKg * 350) + (distanciaKm * 85);
    }
    procesarDespacho() {
        console.log(`[Carga Aérea] Paquete cargado en vuelo ${this.vueloAsignado} con destino a ${this.destino}.`);
        return true;
    }
    async procesarDespachoAsync() {
        console.log(`[Carga Aérea] Confirmando vuelo ${this.vueloAsignado}...`);
        await esperar(1200);
        return this.procesarDespacho();
    }
    obtenerTipoTransporte() {
        return `Aéreo Express (Vuelo: ${this.vueloAsignado})`;
    }
}
