// Mecanismo de sincronización para evitar condiciones de carrera al modificar capacidad compartida.
export class Mutex {
    ocupado = false;
    cola = [];
    async adquirir() {
        if (!this.ocupado) {
            this.ocupado = true;
            return;
        }
        await new Promise((resolve) => this.cola.push(resolve));
    }
    liberar() {
        const siguiente = this.cola.shift();
        if (siguiente) {
            siguiente();
        }
        else {
            this.ocupado = false;
        }
    }
    async ejecutarExclusivo(fn) {
        await this.adquirir();
        try {
            return await fn();
        }
        finally {
            this.liberar();
        }
    }
}
