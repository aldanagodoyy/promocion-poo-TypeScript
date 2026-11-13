
// Utilidad auxiliar para simular latencias asíncronas de red

export const esperar = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

