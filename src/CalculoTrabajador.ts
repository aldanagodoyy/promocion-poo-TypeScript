// Mecanismo de paralelismo real usando hilos independientes de Node.js

import { parentPort, workerData } from "node:worker_threads";
import { FabricaEnvios } from "./FabricaEnvios.js";
import { DimensionesPaquete, TareaCalculo } from "./Interfaces.js";

const { tipo, cantidad, distanciaKm, contador } = workerData as TareaCalculo;
const contadorCompartido = new Int32Array(contador);
const envio = FabricaEnvios.crearEnvio(tipo, "Destino Masivo");

let total = 0;
for (let i = 0; i < cantidad; i++) {
    const paquete: DimensionesPaquete = {
        altoCm: 20, anchoCm: 30, largoCm: 40, pesoKg: 10
    };
    total += envio.calcularCosto(paquete, distanciaKm);
    Atomics.add(contadorCompartido, 0, 1); // Incremento atómico seguro entre hilos
}

parentPort?.postMessage(total);

