// Mecanismo de sincronización para evitar condiciones de carrera al modificar capacidad compartida.

export class Mutex {
    private ocupado = false;
    private cola: Array<() => void> = [];

    private async adquirir(): Promise<void> {
        if (!this.ocupado) {
            this.ocupado = true;
            return;
        }
        await new Promise<void>((resolve) => this.cola.push(resolve));
    }

    private liberar(): void {
        const siguiente = this.cola.shift();
        if (siguiente) {
            siguiente();
        } else {
            this.ocupado = false;
        }
    }

    public async ejecutarExclusivo<T>(fn: () => Promise<T>): Promise<T> {
        await this.adquirir();
        try {
            return await fn();
        } finally {
            this.liberar();
        }
    }
}
