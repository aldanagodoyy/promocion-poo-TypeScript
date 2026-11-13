// HERENCIA Y POLIMORFISMO (LSP / OCP)
// Estrategia 1: es un envio específico por vía terrestre. 
import { ServicioEnvio } from "./ServicioEnvio.js";
import { esperar } from "./utilidades.js";
export class EnvioTerrestre extends ServicioEnvio {
    patenteCamion;
    constructor(destino, patenteCamion) {
        super(destino, 1500);
        this.patenteCamion = patenteCamion;
    }
    calcularCosto(dimensiones, distanciaKm) {
        const volumen = (dimensiones.altoCm * dimensiones.anchoCm * dimensiones.largoCm) / 1000000;
        return (volumen * 200) + (distanciaKm * 40) + this.costoBase;
    }
    procesarDespacho() {
        console.log(`[Ruta Terrestre] Camión ${this.patenteCamion} despachado a ${this.destino}.`);
        return true;
    }
    async procesarDespachoAsync() {
        console.log(`[Ruta Terrestre] Verificando camión ${this.patenteCamion}...`);
        await esperar(800);
        return this.procesarDespacho();
    }
    obtenerTipoTransporte() {
        return `Terrestre (Flota: ${this.patenteCamion})`;
    }
}
