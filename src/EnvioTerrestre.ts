
// HERENCIA Y POLIMORFISMO (LSP / OCP)
// Estrategia 1: es un envio específico por vía terrestre. 
 
import { ServicioEnvio } from "./ServicioEnvio.js";
import { ICalculadorTarifa, DimensionesPaquete } from "./Interfaces.js";
import { esperar } from "./utilidades.js";

export class EnvioTerrestre extends ServicioEnvio implements ICalculadorTarifa {
    constructor(
        destino: string,
        public patenteCamion: string 
    ) {
        super(destino, 1500);
    }

    public calcularCosto(dimensiones: DimensionesPaquete, distanciaKm: number): number {
        const volumen = (dimensiones.altoCm * dimensiones.anchoCm * dimensiones.largoCm) / 1000000;
        return (volumen * 200) + (distanciaKm * 40) + this.costoBase;
    }

    public procesarDespacho(): boolean {
        console.log(`[Ruta Terrestre] Camión ${this.patenteCamion} despachado a ${this.destino}.`);
        return true;
    }

    public async procesarDespachoAsync(): Promise<boolean> {
        console.log(`[Ruta Terrestre] Verificando camión ${this.patenteCamion}...`);
        await esperar(800);
        return this.procesarDespacho();
    }

    public obtenerTipoTransporte(): string {
        return `Terrestre (Flota: ${this.patenteCamion})`;
    }
}



