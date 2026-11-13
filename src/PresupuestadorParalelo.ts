import { Worker } from "node:worker_threads";
import { TareaCalculo } from "./Interfaces.js";

export class PresupuestadorParalelo {
    private readonly rutaWorker = new URL("./CalculoTrabajador.js", import.meta.url);

    public calcularLote(tarea: TareaCalculo): Promise<number> {
        return new Promise((resolve, reject) => {
            const worker = new Worker(this.rutaWorker, { workerData: tarea });
            worker.once("message", resolve);
            worker.once("error", reject);
            worker.once("exit", (code: number) => {
                if (code !== 0) reject(new Error(`Worker finalizó con código ${code}`));
            });
        });
    }
}

