import os

# =============================================
# CONFIGURACIÓN DE BASE DE DATOS - MySQL
# Usa variables de entorno (Docker) o valores
# por defecto para desarrollo local con Workbench
# =============================================

DB_CONFIG = {
    'host':     os.environ.get('DB_HOST',     '127.0.0.1'),
    'port':     int(os.environ.get('DB_PORT', 3306)),
    'user':     os.environ.get('DB_USER',     'aaphal_user'),
    'password': os.environ.get('DB_PASSWORD', 'aaphal1234'),
    'database': os.environ.get('DB_NAME',     'aaphal_db'),
}
