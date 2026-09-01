En este proyecto, trabajamos en una página de venta de suplementos alimenticios, utilizado HTML y CSS para el diseño y estructura, además de JavaScript para las validaciones.

# Devops

# Documentación del Proyecto y Estrategia CI/CD

## 1. Elección del Modelo de Ramificación
Se eligió el modelo GitFlow. Se utiliza `main` para código estable en producción, `develop` como rama de integración previa, `feature/*` para el desarrollo de nuevas características aisladas y `hotfix/*` para la resolución de errores críticos en producción.

## 2. Guía de Buenas Prácticas
* Nombres de ramas: `feature/cambiobienvenida`, `feature/cambiotitulo_idx`, `hotfix/correcion-exclamacion`, `develop`.
* Mensajes de commit: Formato Conventional Commits (`feat:`, `fix:`, `docs:`).
* Estrategia de integración: Los cambios de `develop` o `main` deben de ser mediante Pull Request aprobado tras pasar las validaciones del pipeline.

## 3. Estructura de Carpetas del Proyecto

├── .git/
├── .github/
├── assets/
├── carrito
├── index
├── logout
├── nuevousuario
├── pedidos
├── producto_individual
├── producto_individual2
├── producto_individual3
├── productos
├── quienes
├── README
├── reseñas
└── usuario

## 4. Automatización con GitHub Actions
El pipeline está definido en `.github/workflows/ci.yml`.
* Triggers: se ejecuta ante eventos `push` a `develop` y `pull_request` dirigidos a `main`.
* Acciones: clona el repositorio en el entorno virtual `ubuntu-latest`, inspecciona los archivos y ejecuta las tareas de validación.

## 5. Reflexión Individual:
  * Integrante 1 (Christopher): En esta evaluacion aprendi a configurar flujos automatizados con GitHub Actions.