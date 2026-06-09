from flask import Flask, render_template, request, jsonify, Response
import mysql.connector
import os

app = Flask(__name__)

# ===== CONEXIÓN A BASE DE DATOS MYSQL =====
def get_db_connection():
    try:
        conn = mysql.connector.connect(
            host=os.environ.get("DB_HOST", "127.0.0.1"),
            port=int(os.environ.get("DB_PORT", 3308)),
            user=os.environ.get("DB_USER", "root"),
            password=os.environ.get("DB_PASSWORD", "123456"),
            database=os.environ.get("DB_NAME", "aaphal_db")
        )
        return conn
    except Exception as e:
        print(f"Error conectando a MySQL: {e}")
        return None


# ===== VIDEOS =====
@app.route('/static/videos/<path:filename>')
def serve_video(filename):
    video_path = os.path.join(app.root_path, 'static', 'videos', filename)

    if not os.path.exists(video_path):
        return "Not found", 404

    file_size = os.path.getsize(video_path)
    range_header = request.headers.get('Range', None)

    if range_header:
        match = range_header.replace('bytes=', '').split('-')
        byte_start = int(match[0])
        byte_end = int(match[1]) if match[1] else file_size - 1
        length = byte_end - byte_start + 1

        with open(video_path, 'rb') as f:
            f.seek(byte_start)
            data = f.read(length)

        rv = Response(data, 206, mimetype='video/mp4')
        rv.headers.add('Content-Range', f'bytes {byte_start}-{byte_end}/{file_size}')
        rv.headers.add('Accept-Ranges', 'bytes')
        rv.headers.add('Content-Length', str(length))
        return rv

    with open(video_path, 'rb') as f:
        data = f.read()

    rv = Response(data, 200, mimetype='video/mp4')
    rv.headers.add('Accept-Ranges', 'bytes')
    rv.headers.add('Content-Length', str(file_size))
    return rv


# ===== PÁGINAS =====
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/nosotros')
def nosotros():
    return render_template('nosotros.html')

@app.route('/produccion')
def produccion():
    return render_template('produccion_agricola.html')

@app.route('/exportacion')
def exportacion():
    return render_template('exportacion.html')

@app.route('/noticias')
def noticias():
    return render_template('noticias.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

@app.route('/alianzas')
def alianzas():
    return render_template('alianzas.html')

# ===== RECLAMACIONES (PÁGINA) =====
@app.route('/reclamaciones', methods=['GET'])
def reclamaciones():
    return render_template('reclamaciones.html')


# ===== API RECLAMACIONES (FORMULARIO) =====
@app.route('/api/reclamaciones', methods=['POST'])
def guardar_reclamacion():
    try:
        data = request.get_json(force=True)

        print("RECLAMACION RECIBIDA:", data)

        return jsonify({
            "success": True,
            "message": "Reclamación recibida correctamente"
        })

    except Exception as e:
        print("ERROR RECLAMACION:", e)
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


# ===== CONTACTO =====
@app.route('/api/contacto', methods=['POST'])
def guardar_contacto():
    try:
        data = request.get_json()

        nombre   = data.get('nombre', '').strip()
        correo   = data.get('correo', '').strip()
        telefono = data.get('telefono', '').strip()
        asunto   = data.get('asunto', '').strip()
        mensaje  = data.get('mensaje', '').strip()

        if not all([nombre, correo, telefono, asunto]):
            return jsonify({'success': False, 'message': 'Campos incompletos'}), 400

        conn = get_db_connection()
        if not conn:
            return jsonify({'success': False, 'message': 'Error de conexión a MySQL'}), 500

        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO contactos (nombre, correo, telefono, asunto, mensaje) VALUES (%s, %s, %s, %s, %s)",
            (nombre, correo, telefono, asunto, mensaje)
        )
        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({'success': True, 'message': 'Mensaje enviado correctamente'}), 200

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500


# ===== ADMIN =====
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'aaphal2024')

@app.route('/admin')
def admin():
    password = request.args.get('key', '')

    if password != ADMIN_PASSWORD:
        return render_template('admin_login.html'), 401

    conn = get_db_connection()
    if not conn:
        return "Error de conexión a MySQL", 500

    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM contactos ORDER BY fecha DESC")
    contactos = cursor.fetchall()

    cursor.close()
    conn.close()

    return render_template('admin_panel.html', contactos=contactos)


# ===== RUN =====
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)