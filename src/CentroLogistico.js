// CONTEXTO LOGÍSTICO (Principio de Inversión de Dependencias - DIP)
// coordina los presupuestos y despachos
// depende de la interfaz ICalculadorTarifa
export class CentroLogistico {
    calculador;
    constructor(calculadorInicial) {
        this.calculador = calculadorInicial;
    }
    setEstrategia(nuevoCalculador) {
        this.calculador = nuevoCalculador;
    }
    presupuestarYDespachar(paquete, distanciaKm) {
        const costoFinal = this.calculador.calcularCosto(paquete, distanciaKm);
        console.log(`Modo: ${this.calculador.obtenerTipoTransporte()}`);
        console.log(`Presupuesto calculado: $${costoFinal.toLocaleString("es-AR")}`);
        return costoFinal;
    }
    // CONCURRENCIA: Despacha un lote de envíos en paralelo lógico usando Promise.all
    async despacharLote(envios) {
        const promesas = envios.map((envio) => envio.procesarDespachoAsync());
        await Promise.all(promesas);
        console.log("[Lote] Todos los envíos asíncronos procesados concurrentemente.");
    }
}
