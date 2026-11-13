// PATRÓN FACTORY METHOD
// Centraliza la creación de objetos concretos
import { EnvioTerrestre } from "./EnvioTerrestre.js";
import { EnvioAereo } from "./EnvioAereo.js";
export class FabricaEnvios {
    static crearEnvio(tipo, destino) {
        if (tipo === "terrestre") {
            return new EnvioTerrestre(destino, "AA-789-XY");
        }
        else {
            return new EnvioAereo(destino, "AR-1842");
        }
    }
}
