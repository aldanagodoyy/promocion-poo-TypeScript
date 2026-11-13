// Utilidad auxiliar para simular latencias asíncronas de red
export const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
