from app import create_app
from flask import request
from flask_socketio import SocketIO, emit
app = create_app()
socketio = SocketIO(app,cors_allowed_origins="*")
@socketio.on('connect')
def test_connect():
    print("Connected")
    emit("connect",{"data":f"id: {request.sid} is connected"})
    emit("res", {"data": "dghdh"});

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')



if __name__ == '__main__':
    socketio.run(app, debug=True,port=5001)
