# =============================================
# DOCKERFILE - AAPHAL Flask App
# =============================================

# Imagen base de Python
FROM python:3.13-slim

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar dependencias primero (para aprovechar caché de Docker)
COPY requirements.txt .

# Instalar dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo el proyecto
COPY . .

# Exponer el puerto
EXPOSE 8080

# Comando para correr la app
CMD ["python", "-c", "from app import app; app.run(host='0.0.0.0', port=8080)"]
