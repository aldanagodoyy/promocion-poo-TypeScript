# Análisis del Paradigma Orientado a Objetos en TypeScript 

Este repositorio contiene la implementación práctica y ejecutable de los ejemplos desarrollados en el artículo técnico para la promoción de la asignatura Programación Orientada a Objetos.

## Estructura del Proyecto

El sistema modela una **Plataforma de Gestión de Envíos y Logística**, diseñado para ilustrar conceptos avanzados de POO que trascienden la sintaxis básica. 

### Características principales:
* **Jerarquía de Clases y Abstracción:** Uso de clases abstractas e interfaces para definir contratos claros.
* **Polimorfismo y Enlace Dinámico:** Comportamientos intercambiables en tiempo de ejecución.
* **Patrones de Diseño:** Implementación del patrón **Strategy** para desacoplar los algoritmos de cálculo de la lógica principal.
* **Principios SOLID:** Aplicación rigurosa (especialmente *Single Responsibility* y *Open/Closed*).

## Requisitos Previos

* [Node.js](https://nodejs.org/).
* TypeScript instalado.

## Estructura del Repositorio 

La organización del código fuente sigue una estructura modular:

```text
.
├── src/                  # Código fuente principal del proyecto
│   ├── models/           # Entidades del dominio y clases abstractas
│   ├── strategies/       # Implementación del patrón Strategy (algoritmos intercambiables)
│   ├── services/         # Lógica de negocio y orquestación
│   └── main.[ext]        # Punto de entrada / ejecución de ejemplos
├── tests/                # Pruebas unitarias (opcional pero recomendado)
├── README.md             # Documentación del repositorio
└── [archivo_config]      # Dependencias o gestor de paquetes del lenguaje (ej. package.json, requirements.txt)

