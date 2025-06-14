# Proposal-Prototype

Este proyecto es un **prototipo de administrador de propuestas**, desarrollado como parte de una práctica laboral. Originalmente concebido como una solución para gestionar propuestas dentro de una empresa, fue descartado debido a nuevos requisitos que lo hicieron inviable. Sin embargo, muchos de sus módulos fueron reutilizados en el desarrollo del proyecto final.

## ✨ Características

- 🗂️ **Gestión de propuestas** con estados: *Iniciada, En proceso, Entregada, No entregado, Finalizado*.
- 📋 **Tabla de propuestas** con detalles clave:
  - N° Propuesta
  - Detalle
  - Tipo de actividad
  - Responsable actividad
  - Fechas clave (descartadas, entrega óptima y final)
  - Estado actual
  - Opciones de edición y conclusión

- 🛠️ **Módulos principales**
  - 🔍 **Buscador de propuestas** con filtrado avanzado  
  - 📝 **Formulario de ingreso de propuestas** para nuevos registros  
  - 🧩 **Standalone Components** para modularidad óptima  
  - 🔧 **Pipe de filtrado** para mejorar la búsqueda

## ⚙️ Tecnologías utilizadas

- **Angular 17 → Actualizado a Angular 19 con standalone components**  
  - Este proyecto comenzó con **Angular 17**, pero fue migrado a **Angular 19** con standalone components.  
  - La actualización sirvió como **ejercicio práctico** para experimentar con la nueva metodología de Angular.  
  - Uso de **Standalone Components** para eliminar la necesidad de módulos tradicionales.

- **Bootstrap (versión online, no instalado)**  
  - Se utiliza la versión alojada en **CDN**, evitando instalación local.  
  - Se encuentra en `index.html`:  
    ```html
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    ```

- **FontAwesome (versión online, no instalado)**  
  - También alojado en **CDN**, evitando instalación.  
  - Se encuentra en `index.html`:  
    ```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    ```

- **TypeScript**  
  - Base del desarrollo en Angular, con configuración en `tsconfig.json`.

- **Node.js y npm**  
  - **Versión utilizada:**
    ```bash
    Node.js: 22.15.0
    npm: 10.9.2
    ```
  - Para evitar errores, se recomienda usar una versión de Node.js igual o superior a **22.15.0**.

- **Dependencias principales**  
  - Angular CLI: `@angular/cli@19.2.11`  
  - Angular Core: `@angular/core@19.2.10`  
  - PostCSS: `postcss@8.5.3`  
  - RxJS: `rxjs@7.8.2`  
  - TypeScript: `typescript@5.5.4`

- **GitHub Pages**  
  - Se utilizó para el despliegue estático.

## 📂 Estructura del proyecto

```
Proposal-Prototype/
│── .angular/
│── .vscode/
│── docs/
│   ├── index.html
│   ├── browser/
│── node_modules/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── proposal/
│   │   │   │   ├── proposal.component.ts
│   │   │   ├── search-bar/
│   │   │   │   ├── search-bar.component.ts
│   │   │   ├── search-result/
│   │   │   │   ├── search-result.component.ts
│   ├── pipes/
│   │   ├── filter.pipe.ts
│   ├── service/
│   │   ├── data.service.ts
│   │   ├── search-form-connector.service.ts
│   │   ├── search.service.ts
│   ├── app.component.ts
│── assets/
│── styles.css
│── README.md
│── angular.json
│── package.json
│── tsconfig.json
```

## 🏗️ Componentes Standalone

- **SearchBarComponent**: Componente de búsqueda que permite ingresar términos y filtrar resultados en la base de datos.
- **SearchResultComponent**: Muestra los resultados filtrados con datos clave organizados en una tabla.
- **ProposalComponent**: Módulo que gestiona las propuestas y sus estados.
- **FilterPipe**: Pipe personalizado para filtrar datos con base en criterios de búsqueda específicos.

## 🔧 Servicios en la aplicación
Estos servicios permiten la gestión de datos y comunicación entre módulos:
- **data.service.ts**: Este servicio **simula una base de datos**, proporcionando datos de prueba para visualizar el funcionamiento de la aplicación en sus primeras fases. Se creó debido a la falta de una base de datos real en el momento del desarrollo inicial.
- **search.service.ts**: Controla la lógica de búsqueda y filtrado de propuestas.
- **search-form-connector.service.ts**: Conecta el formulario de búsqueda con los resultados mostrados en pantalla.

## 🌐 Despliegue en GitHub Pages

Este proyecto está desplegado en **GitHub Pages** y puede visualizarse en:  
🔗 [Proposal-Prototype](https://AnDev-000.github.io/Proposal-Prototype/)

## 💻 Instalación y ejecución

Para ejecutar este proyecto en un nuevo entorno, asegúrate de tener **Node.js** instalado con la versión recomendada. Luego, sigue estos pasos:

1️⃣ **Clonar el repositorio**  
```bash
git clone https://github.com/AnDev-000/Proposal-Prototype.git
cd Proposal-Prototype
```

2️⃣ **Instalar dependencias**  
```bash
npm install
```

Si Angular CLI no está instalado globalmente, instálalo con:  
```bash
npm install -g @angular/cli
```

3️⃣ **Ejecutar el servidor de desarrollo**  
```bash
ng serve
```

Luego accede a la aplicación desde `http://localhost:4200/`.


## 🔍 Nota Final

Este proyecto es un **prototipo** y no refleja el producto final utilizado en producción. Fue un ejercicio de desarrollo que contribuyó al aprendizaje y evolución de otras soluciones más avanzadas.