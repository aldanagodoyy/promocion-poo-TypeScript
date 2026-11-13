# Análisis del Paradigma Orientado a Objetos en TypeScript 

Este repositorio contiene la implementación práctica y ejecutable de los ejemplos desarrollados en el artículo técnico para la promoción de la materia Programación Orientada a Objetos.

## Estructura del Proyecto

El sistema modela una **Plataforma de Gestión de Envíos y Logística**, diseñado para mostrar los conceptos avanzados de POO que extienden la sintaxis básica. 

### Características principales:
* **Jerarquía de Clases y Abstracción:** Utilización de clases abstractas e interfaces para definir contratos claros.
* **Polimorfismo y Enlace Dinámico:** Comportamientos intercambiables en tiempo de ejecución.
* **Patrones de Diseño:** Implementación del patrón Strategy para desacoplar los algoritmos de cálculo de la lógica principal.
* **Principios SOLID:** Aplicación de los principios de SOLID, especialmente Single Responsibility y Open/Closed.

## Diagrama de Clases

![Diagrama de Clases del Sistema Logístico](./image.png)

## Instrucciones de Instalación y Ejecución

Los siguientes pasos sirven para clonar, compilar y ejecutar el proyecto localmente en el entorno de desarrollo.

### Prerrequisitos
Asegurarse de tener instalado en el sistema:
* [Node.js](https://nodejs.org/) (versión 16 o superior).
* NPM (incluido con Node.js).

### 1. Clonar el repositorio

git clone <https://github.com/aldanagodoyy/promocion-poo-TypeScript>
cd promocion-poo-typescript

### 2. Instalar dependencias
npm install

### 3. Compilar el código TypeScript en JavaScript
El proyecto cuenta con un archivo de configuración (tsconfig.json). Para compilar los archivos fuente de TypeScript (.ts) a JavaScript (.js), hay que ejecutar el siguiente comando: 

npx tsc

### 4. Ejecutar el proyecto con el siguiente comando: 

node src/main.js




