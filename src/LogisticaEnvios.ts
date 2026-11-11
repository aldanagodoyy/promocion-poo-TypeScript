// src/sistema-pagos.ts

// 1. ABSTRACCIÓN Y CONTRATOS (Interfaces)
export interface EstrategiaPago {
    procesar(monto: number): boolean;
    obtenerIdentificador(): string;
}

// 2. ENCAPSULAMIENTO Y CLASE BASE ABSTRACTA
export abstract class MetodoPago implements EstrategiaPago {
    // Encapsulamiento nativo ECMAScript (privado estricto)
    #idInterno: string;

    // Modificador de visibilidad accesible por subclases
    protected titular: string;

    constructor(titular: string) {
        this.titular = titular;
        this.#idInterno = Math.random().toString(36).substring(2, 9);
    }

    // Método abstracto que fuerza polimorfismo en las subclases
    public abstract procesar(monto: number): boolean;

    public obtenerIdentificador(): string {
        return `ID-${this.#idInterno} (${this.titular})`;
    }
}

// 3. HERENCIA Y POLIMORFISMO: Estrategia Tarjeta de Crédito
export class PagoTarjeta extends MetodoPago {
    private numeroTarjeta: string;

    constructor(titular: string, numeroTarjeta: string) {
        super(titular);
        this.numeroTarjeta = numeroTarjeta;
    }

    public override procesar(monto: number): boolean {
        console.log(`[Tarjeta ${this.numeroTarjeta.slice(-4)}] Cobro de $${monto} para ${this.titular}`);
        return true;
    }
}

// 4. HERENCIA Y POLIMORFISMO: Estrategia Criptomoneda
export class PagoCripto extends MetodoPago {
    private walletAddress: string;

    constructor(titular: string, walletAddress: string) {
        super(titular);
        this.walletAddress = walletAddress;
    }

    public override procesar(monto: number): boolean {
        console.log(`[Blockchain ${this.walletAddress.slice(0, 6)}...] Transferencia de $${monto}`);
        return true;
    }
}

// 5. CLASE CONTEXTO (Inversión de Dependencias y Tipado Estructural)
export class ProcesadorTransacciones {
    private estrategia: EstrategiaPago;

    constructor(estrategia: EstrategiaPago) {
        this.estrategia = estrategia;
    }

    public cambiarEstrategia(nuevaEstrategia: EstrategiaPago): void {
        this.estrategia = nuevaEstrategia;
    }

    public ejecutar(monto: number): void {
        if (monto <= 0) {
            throw new Error("El monto debe ser positivo.");
        }
        const exito = this.estrategia.procesar(monto);
        if (exito) {
            console.log(`Transacción exitosa: ${this.estrategia.obtenerIdentificador()}\n`);
        }
    }
}

// --- EJECUCIÓN Y PRUEBA ---
const tarjeta = new PagoTarjeta("Aldana Godoy", "4509123456789999");
const cripto = new PagoCripto("Aldana Godoy", "0x71C...8976F");

const procesador = new ProcesadorTransacciones(tarjeta);
procesador.ejecutar(1500);

procesador.cambiarEstrategia(cripto);
procesador.ejecutar(3200);

// Demostración de Tipado Estructural (Duck Typing)
const pagoEfectivoExterno = {
    procesar: (monto: number) => {
        console.log(`[Efectivo] Recibiendo $${monto} en ventanilla`);
        return true;
    },
    obtenerIdentificador: () => "Ticket-Ventanilla-001"
};

procesador.cambiarEstrategia(pagoEfectivoExterno);
procesador.ejecutar(500);