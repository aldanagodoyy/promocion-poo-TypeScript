import { Worker } from "node:worker_threads";
export class PresupuestadorParalelo {
    rutaWorker = new URL("./CalculoTrabajador.js", import.meta.url);
    calcularLote(tarea) {
        return new Promise((resolve, reject) => {
            const worker = new Worker(this.rutaWorker, { workerData: tarea });
            worker.once("message", resolve);
            worker.once("error", reject);
            worker.once("exit", (code) => {
                if (code !== 0)
                    reject(new Error(`Worker finalizó con código ${code}`));
            });
        });
    }
}
