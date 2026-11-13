
// CONTEXTO LOGÍSTICO (Principio de Inversión de Dependencias - DIP)
// coordina los presupuestos y despachos
// depende de la interfaz ICalculadorTarifa

import { ICalculadorTarifa, DimensionesPaquete } from "./Interfaces.js";
import { ServicioEnvio } from "./ServicioEnvio.js";

export class CentroLogistico {
    private calculador: ICalculadorTarifa;

    constructor(calculadorInicial: ICalculadorTarifa) {
        this.calculador = calculadorInicial;
    }

    public setEstrategia(nuevoCalculador: ICalculadorTarifa): void {
        this.calculador = nuevoCalculador;
    }

    public presupuestarYDespachar(paquete: DimensionesPaquete, distanciaKm: number): number {
        const costoFinal = this.calculador.calcularCosto(paquete, distanciaKm);
        console.log(`Modo: ${this.calculador.obtenerTipoTransporte()}`);
        console.log(`Presupuesto calculado: $${costoFinal.toLocaleString("es-AR")}`);
        return costoFinal;
    }

    // CONCURRENCIA: Despacha un lote de envíos en paralelo lógico usando Promise.all
    public async despacharLote(envios: ServicioEnvio[]): Promise<void> {
        const promesas = envios.map((envio) => envio.procesarDespachoAsync());
        await Promise.all(promesas);
        console.log("[Lote] Todos los envíos asíncronos procesados concurrentemente.");
    }
}

