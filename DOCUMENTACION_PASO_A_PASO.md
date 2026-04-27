# Documentacion Paso a Paso - Mini Sitio

## 1. Objetivo

Practicar gestion de versiones con Git y GitHub sobre un mini sitio web estatico con este alcance:

- trabajo con `main`
- trabajo por ramas `feature/*`
- integracion en `release/v1.0`
- revision de versiones con comandos Git
- cierre opcional con GitHub Actions para CI/CD

## 2. Ruta del proyecto

`C:\Users\Usuario\Desktop\lab 2\ramas de sisitemas\mini-sitio`

## 3. Archivos base

- `index.html`
- `styles.css`
- `script.js`

## 4. Mapa general por bloques

### Bloque A - Flujo principal del mini sitio

1. Crear `main` y hacer commit inicial
2. Crear y registrar `feature/html`
3. Crear y registrar `feature/estilos`
4. Crear y registrar `feature/js`
5. Integrar cambios en `main`
6. Crear `release/v1.0`

### Bloque B - Practica de versionamiento

1. `git log`
2. `git log --oneline`
3. `git log --oneline --graph --all`
4. `git show <hash>`
5. `git diff <ref1> <ref2>`
6. `git tag`
7. `git switch --detach <ref>`
8. `git revert`
9. `git reflog`

### Bloque C - GitHub Actions / CI-CD

1. Crear `.github/workflows/ci.yml`
2. Validar ejecucion en push y pull request
3. Opcional: versionado automatico
4. Opcional: `release.yml`

## 5. Estado actual del proyecto

Ya avanzamos a nivel de archivos:

- `index.html` ya tiene el titulo actualizado
- `index.html` ya tiene el parrafo `#extra`
- `styles.css` ya tiene el fondo degradado
- `styles.css` ya tiene estilo para `#extra`

Pero a nivel Git, el orden correcto sigue siendo este:

1. confirmar o crear `main`
2. registrar el commit inicial
3. registrar `feature/html`
4. registrar `feature/estilos`
5. continuar con `feature/js`

Estado real detectado en el repositorio:

- existe la rama `main`
- existe la rama `feature/html`
- existe la rama `feature/estilos`
- `main` ya contiene los cambios de `styles.css`
- `feature/html` conserva el cambio de `index.html`
- hay cambios locales pendientes en esta documentacion

## 6. Bloque A - Paso a paso

### Paso 1 - Crear `main`

Usar este bloque si el repositorio aun no tiene rama principal:

```powershell
cd "C:\Users\Usuario\Desktop\lab 2\ramas de sisitemas\mini-sitio"
git init
git add .
git commit -m "Commit inicial: estructura basica de sitio web"
git branch -M main
git remote remove origin 2>$null
git remote add origin https://github.com/redwhizmlfo/mini-sitio.git
git push -u origin main
```

Resultado esperado:

- repositorio inicializado
- primer commit creado
- rama `main` disponible
- remoto `origin` configurado

### Paso 2 - Rama `feature/html`

Objetivo:

- actualizar el titulo principal
- agregar el parrafo `#extra`

Estado esperado en `index.html`:

```html
<h1>Bienvenido a Mi Sitio Basico 🚀</h1>
<p id="extra"></p>
```

Comandos Git:

```powershell
git checkout -b feature/html
git add index.html
git commit -m "HTML: actualizar titulo y agregar parrafo extra"
git push -u origin feature/html
```

### Paso 3 - Rama `feature/estilos`

Objetivo:

- cambiar el fondo a un degradado
- agregar estilo a `#extra`

Estado esperado en `styles.css`:

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

Comandos Git:

```powershell
git checkout main
git checkout -b feature/estilos
git add styles.css
git commit -m "CSS: fondo con degradado y estilos para parrafo extra"
git push -u origin feature/estilos
```

### Paso 4 - Rama `feature/js`

Objetivo:

- ampliar `cambiarMensaje()`
- crear `mostrarHora()`
- agregar un nuevo boton en `index.html`

Cambios esperados:

En `script.js`:

```javascript
function cambiarMensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Gracias por hacer clic en el boton.";
    const extra = document.getElementById("extra");
    extra.textContent = "Este texto aparecio dinamicamente.";
}

function mostrarHora() {
    const ahora = new Date();
    alert("La hora actual es: " + ahora.toLocaleTimeString());
}
```

En `index.html` agregar:

```html
<button onclick="mostrarHora()">Mostrar hora</button>
```

Comandos Git:

```powershell
git checkout main
git checkout -b feature/js
git add index.html script.js
git commit -m "JS: funcion mostrarHora y actualizacion de cambiarMensaje"
git push -u origin feature/js
```

### Paso 5 - Integracion en `main`

Orden sugerido:

1. merge de `feature/html`
2. merge de `feature/estilos`
3. merge de `feature/js`

Comandos base:

```powershell
git checkout main
git merge feature/html
git merge feature/estilos
git merge feature/js
git push origin main
```

### Paso 6 - `release/v1.0`

```powershell
git checkout main
git pull origin main
git checkout -b release/v1.0
git commit --allow-empty -m "Release v1.0: sitio con mejoras"
git push -u origin release/v1.0
```

## 7. Bloque B - Practica de versionamiento

### Ver historial

```powershell
git log
git log --oneline
git log --oneline --graph --all
```

### Ver contenido o diferencias

```powershell
git show <hash>
git diff <ref1> <ref2>
git diff --name-status <ref1> <ref2>
```

### Crear etiquetas

```powershell
git tag -a v1 -m "v1: estructura basica"
git tag -a v2 -m "v2: html"
git tag -a v3 -m "v3: estilos"
git tag -a v4 -m "v4: js"
```

### Revisar versiones anteriores

```powershell
git switch --detach <ref>
git switch -
git switch -c hotfix/desde-v2 <ref>
```

### Revertir y recuperar

```powershell
git revert <hash>
git reflog
```

## 8. Bloque C - GitHub Actions

Pendiente para una fase posterior:

1. crear `.github/workflows/ci.yml`
2. ejecutar validaciones en push y PR
3. agregar versionado automatico si lo deseas
4. preparar `release.yml`

## 9. Bitacora de avance

- [x] Paso 1 - Crear `main`
- [x] Paso 2 - Registrar `feature/html`
- [x] Paso 3 - Registrar `feature/estilos`
- [ ] Paso 4 - Registrar `feature/js`
- [ ] Paso 5 - Integrar en `main`
- [ ] Paso 6 - Crear `release/v1.0`
- [ ] Bloque B - Practica de versionamiento
- [ ] Bloque C - GitHub Actions

## 10. Proximo bloque

Siguiente bloque recomendado:

- ejecutar `feature/js`
- luego integrar o reconciliar `feature/html` en `main`
- despues crear `release/v1.0`

## 11. Notas

Si `origin` ya existe:

```powershell
git remote remove origin
git remote add origin https://github.com/redwhizmlfo/mini-sitio.git
```

Para revisar el historial en cualquier momento:

```powershell
git log --oneline --graph --all
```
