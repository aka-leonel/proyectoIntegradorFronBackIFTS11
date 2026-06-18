# proyectoIntegradorFronBackIFTS11

Aplicación de notas para las materias Desarrollo Frontend y Desarrollo Backend del IFTS11.

## Prerrequisitos

- Node.js
- NPM
- Angular (`npm i -g @angular/cli@19.2.23`)

## Correr proyecto

1. Crear `.env` dentro de la carpeta `backend` y agregar uri de MongoDB:
```
MONGO_URI=tu_uri
```

2. Abrir terminal y dirigirse a la carpeta `backend`
```bash
cd backend
```

3. Instalar dependencias:
```bash
npm install
```

4. Ejecutar back (`npm run dev` para desarrollo)
```bash
npm start
```

5. Abrir una segunda terminal sin cerrar la anterior y dirigirse a la carpeta `frontend`
```bash
cd frontend
```

6. Instalar dependencias
```bash
npm install
```

7. Ejecutar front
```bash
ng serve
```
