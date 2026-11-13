 // PATRÓN FACTORY METHOD
 // Centraliza la creación de objetos concretos

import { ServicioEnvio } from "./ServicioEnvio.js";
import { ICalculadorTarifa } from "./Interfaces.js";
import { EnvioTerrestre } from "./EnvioTerrestre.js";
import { EnvioAereo } from "./EnvioAereo.js";

export class FabricaEnvios {
    public static crearEnvio(tipo: "terrestre" | "aereo", destino: string): ServicioEnvio & ICalculadorTarifa {
        if (tipo === "terrestre") {
            return new EnvioTerrestre(destino, "AA-789-XY");
        } else {
            return new EnvioAereo(destino, "AR-1842");
        }
    }
}

