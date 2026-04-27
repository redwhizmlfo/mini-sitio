# Documentacion Paso a Paso - Mini Sitio

## 1. Objetivo

Practicar gestion de versiones con Git y GitHub sobre un mini sitio web estatico usando:

- `main` como rama principal
- ramas `feature/*` para cambios por area
- una rama `release/v1.0` para cierre de version

Tambien se documentaran comandos para revisar historial, versiones y recuperacion de cambios.

## 2. Estructura actual del proyecto

Archivos base:

- `index.html`
- `styles.css`
- `script.js`

Ruta del proyecto:

`C:\Users\Usuario\Desktop\lab 2\ramas de sisitemas\mini-sitio`

## 3. Flujo de trabajo acordado

Orden de trabajo:

1. Inicializacion del repositorio
2. Rama `feature/html`
3. Rama `feature/estilos`
4. Rama `feature/js`
5. Integracion en `main`
6. Rama `release/v1.0`
7. Revision de historial y versiones
8. Opcional: GitHub Actions para CI/CD

## 4. Paso 1 - Inicializacion del repositorio

Abrir terminal en VS Code dentro de:

```powershell
cd "C:\Users\Usuario\Desktop\lab 2\ramas de sisitemas\mini-sitio"
```

Ejecutar:

```powershell
git init
git branch -M main
git add .
git commit -m "Commit inicial: estructura basica de sitio web"
git remote add origin https://github.com/redwhizmlfo/mini-sitio.git
git push -u origin main
```

Resultado esperado:

- repositorio inicializado
- rama principal `main`
- primer commit creado
- repositorio remoto conectado

## 5. Paso 2 - Rama feature/html

Objetivo:

- actualizar el titulo principal
- agregar un parrafo extra vacio

Comando para crear la rama:

```powershell
git checkout -b feature/html
```

Cambios esperados en `index.html`:

```html
<h1>Bienvenido a Mi Sitio Basico 🚀</h1>
<p id="extra"></p>
```

Comandos de registro:

```powershell
git add index.html
git commit -m "HTML: actualizar titulo y agregar parrafo extra"
git push -u origin feature/html
```

## 6. Paso 3 - Rama feature/estilos

Objetivo:

- cambiar el fondo a un degradado
- agregar estilo para el parrafo `#extra`

Comando para crear la rama:

```powershell
git checkout main
git checkout -b feature/estilos
```

Cambios esperados en `styles.css`:

```css
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #f3f3f3, #e0e0e0);
    text-align: center;
    padding: 50px;
}

#extra {
    font-style: italic;
    color: darkblue;
}
```

Comandos de registro:

```powershell
git add styles.css
git commit -m "CSS: fondo con degradado y estilos para parrafo extra"
git push -u origin feature/estilos
```

## 7. Bitacora de avance

Usaremos esta seccion para marcar en que paso vamos.

- [ ] Paso 1 - Inicializacion del repositorio
- [x] Paso 2 - Rama feature/html
- [x] Paso 3 - Rama feature/estilos
- [ ] Paso 4 - Rama feature/js
- [ ] Paso 5 - Integracion en main
- [ ] Paso 6 - Release v1.0
- [ ] Paso 7 - Revision de versiones
- [ ] Paso 8 - GitHub Actions

## 8. Estado actual

Despues del Paso 2:

- `index.html` actualiza el titulo principal
- `index.html` agrega `<p id="extra"></p>`

Despues del Paso 3:

- `styles.css` usa `linear-gradient(to right, #f3f3f3, #e0e0e0)`
- `styles.css` agrega reglas para `#extra`

## 9. Notas

- Si `origin` ya existe, usar:

```powershell
git remote remove origin
git remote add origin https://github.com/redwhizmlfo/mini-sitio.git
```

- Para revisar el historial en cualquier momento:

```powershell
git log --oneline --graph --all
```
