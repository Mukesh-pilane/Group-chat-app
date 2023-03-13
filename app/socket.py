from flask_socketio import SocketIO, emit
from flask import request

socketio = SocketIO()

@socketio.on('connect')
def user_connect():
        print("Connected")
        emit("sid",request.sid)
@socketio.on('data')
def handle_message(data):
    emit("data", {"data": data})
@socketio.on('disconnect')
def user_disconnect():
        print('Client disconnected')