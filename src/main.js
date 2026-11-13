import { FabricaEnvios } from "./FabricaEnvios.js";
import { CentroLogistico } from "./CentroLogistico.js";
import { PresupuestadorParalelo } from "./PresupuestadorParalelo.js";
import { VueloCarga } from "./VueloCarga.js";
async function ejecutarSistema() {
    console.log("=== SISTEMA LOGÍSTICO: CONCURRENCIA Y PARALELISMO ===\n");
    const paqueteMuestra = { altoCm: 30, anchoCm: 40, largoCm: 50, pesoKg: 12 };
    const distancia = 850;
    // uso de factory method y strategy
    const envioTerrestre = FabricaEnvios.crearEnvio("terrestre", "Comodoro Rivadavia");
    const centro = new CentroLogistico(envioTerrestre);
    centro.presupuestarYDespachar(paqueteMuestra, distancia);
    // CONCURRENCIA
    console.log("\n--- 1) CONCURRENCIA: Despacho de lote asíncrono ---");
    const lote = [
        FabricaEnvios.crearEnvio("terrestre", "Trelew"),
        FabricaEnvios.crearEnvio("aereo", "Ushuaia"),
        FabricaEnvios.crearEnvio("terrestre", "Río Gallegos")
    ];
    console.time("Tiempo Concurrente");
    await centro.despacharLote(lote);
    console.timeEnd("Tiempo Concurrente");
    // PARALELISMO
    console.log("\n--- 2) PARALELISMO: Cálculo masivo con Worker Threads ---");
    const buffer = new SharedArrayBuffer(4);
    const presupuestador = new PresupuestadorParalelo();
    console.time("Tiempo Paralelo");
    const [totalTerrestre, totalAereo] = await Promise.all([
        presupuestador.calcularLote({ tipo: "terrestre", cantidad: 5_000_000, distanciaKm: distancia, contador: buffer }),
        presupuestador.calcularLote({ tipo: "aereo", cantidad: 5_000_000, distanciaKm: distancia, contador: buffer })
    ]);
    console.timeEnd("Tiempo Paralelo");
    console.log(`Presupuesto Terrestre: $${totalTerrestre.toLocaleString("es-AR")}`);
    console.log(`Presupuesto Aéreo: $${totalAereo.toLocaleString("es-AR")}`);
    console.log(`Operaciones atómicas totales: ${Atomics.load(new Int32Array(buffer), 0).toLocaleString("es-AR")}`);
    // SINCRONIZACIÓN
    console.log("\n--- 3) SINCRONIZACIÓN: Exclusión mutua con Mutex ---");
    const vuelo = new VueloCarga("AR-1842", 20); // Capacidad de 20kg
    const reservas = await Promise.all([
        vuelo.reservar(12),
        vuelo.reservar(12)
    ]);
    console.log("Intentos de reserva concurrente (12kg y 12kg sobre 20kg):", reservas); // [true, false]
}
ejecutarSistema().catch(console.error);
