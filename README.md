# proyectoIntegradorFronBackIFTS11

Aplicación de notas para las materias Desarrollo Frontend y Desarrollo Backend del IFTS11.

## Prerrequisitos

- Node.js (verificar con `node -v`)
- NPM (verificar con `npm -v`)
- Angular (instalar con `npm i -g @angular/cli@19.2.23`)

## Correr proyecto

1. Crear `.env` dentro de la carpeta `backend` y agregar uri de MongoDB:
```
MONGO_URI=tu_uri
```

2. Abrir terminal y dirigirse a la carpeta `backend`:
```bash
cd backend
```

3. Instalar dependencias:
```bash
npm install
```

4. Ejecutar back:

    Para desarrollo:
    ```bash
    npm run dev
    ```

    Para producción:
    ```bash
    npm start
    ```

    - Debería decir "MongoDB conectado correctamente"

5. Abrir una segunda terminal sin cerrar la anterior y dirigirse a la carpeta `frontend`:
```bash
cd frontend
```

6. Instalar dependencias:
```bash
npm install
```

7. Ejecutar front:
```bash
npm start
```

8. Ir a `http://localhost:4200/`
